## Câu A1

1. type="email" → Ô nhập text, tự kiểm tra có ký tự @ hợp lệ → Dùng cho form đăng ký tài khoản
2. type="password" → Ô nhập bị ẩn ký tự → Dùng cho đăng nhập / tạo mật khẩu
3. type="number" → Ô nhập số, có nút tăng/giảm → Dùng chọn số lượng sản phẩm
4. type="tel" → Ô nhập số điện thoại → Dùng nhập SĐT khách hàng
5. type="url" → Ô nhập link, kiểm tra định dạng URL → Dùng nhập website người bán
6. type="date" → Hiển thị lịch chọn ngày → Dùng chọn ngày giao hàng
7. type="time" → Chọn giờ/phút → Dùng chọn giờ nhận hàng
8. type="file" → Cho phép upload file → Dùng upload ảnh đánh giá sản phẩm
9. type="checkbox" → Ô tick nhiều lựa chọn → Dùng chọn nhiều danh mục sản phẩm
10. type="radio" → Chọn 1 trong nhiều → Dùng chọn phương thức thanh toán/giới tính
---

## Câu A2

Trường hợp 1
<input type="text" required value="">
→ Không submit được
→ Vì required bắt buộc phải nhập, nhưng value đang rỗng

Trường hợp 2
<input type="email" value="abc">
→ Không submit được
→ Vì "abc" không đúng định dạng email (thiếu @domain)

Trường hợp 3
<input type="number" min="1" max="10" value="15">
→ Không submit được
→ Vì 15 > max (10) → vi phạm giới hạn

Trường hợp 4
<input type="text" pattern="[0-9]{10}" value="abc123">
→ Không submit được
→ Vì pattern yêu cầu đúng 10 chữ số, nhưng input có chữ + không đủ 10 số

Trường hợp 5
<input type="password" minlength="8" value="123">
→ Không submit được
→ Vì độ dài < 8 ký tự

---

## Câu A3

1. `<label for="email">` giúp người dùng biết ô input cần nhập gì, đặc biệt quan trọng với screen reader vì nó sẽ đọc label trước khi đọc input. Ngoài ra, khi click vào label thì con trỏ sẽ focus vào input tương ứng → cải thiện trải nghiệm người dùng.

2. `<fieldset>` + `<legend>` dùng khi có nhiều input liên quan cùng một nhóm.

3. `aria-label` dùng cho các phần tử không có label hiển thị, ví dụ như icon button.

Không nên dùng đồng thời `<label>` và `aria-label` vì sẽ gây trùng lặp thông tin cho screen reader, làm giảm accessibility.

---

## Câu A4

1.loading="lazy" là giúp load ảnh khi scroll tới gần.

Lợi ích:
- Tăng tốc load trang
- Giảm băng thông

Không nên dùng khi: Ảnh nằm trên màn hình đầu tiên (above the fold)

2. Nên dùng nhiều `<source>` trong `<video>` vì mỗi trình duyệt hỗ trợ codec khác nhau. Việc cung cấp nhiều định dạng giúp video chạy được trên nhiều trình duyệt.

**3 định dạng video phổ biến:**

- MP4 (H.264)
- WebM
- Ogg

3. Thuộc tính alt dùng để:→ Mô tả ảnh cho:
- Screen reader
- Khi ảnh lỗi không load

Viết alt tốt:

- iPhone 16
→ "iPhone 16 Pro Max màu Titan nhìn chính diện"
- Ảnh trang trí
→ "" (để rỗng)
- Biểu đồ
→ "Biểu đồ doanh thu Q1 2026 tăng 20% so với Q4 2025"

---
## Câu A5
### `<figure>` vs `<img>`

Dùng `<img>` khi chỉ cần hiển thị hình ảnh đơn giản, không cần chú thích hay nội dung đi kèm (ví dụ: avatar, icon, ảnh minh họa nhỏ).

Dùng `<figure>` khi hình ảnh là một phần nội dung có ý nghĩa, cần mô tả thêm bằng `<figcaption>` để cung cấp thông tin bổ sung (ví dụ: ảnh sản phẩm kèm giá, ảnh trong bài báo, biểu đồ dữ liệu).

---
## Câu C1

Lỗi 1: Dòng 2 — Input "Tên" không có <label for="...">, vi phạm accessibility
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

Lỗi 2: Dòng 4 — Input email không có label
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="Email của bạn">

Lỗi 3: Dòng 6 — Input mật khẩu không có label
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8">

Lỗi 4: Dòng 7 — Input nhập lại mật khẩu không có label và không có kiểm tra
Sửa: <label for="confirm">Nhập lại mật khẩu:</label> <input type="password" id="confirm" name="confirm" required>

Lỗi 5: Dòng 9 — Phone dùng type="text" và có sẵn value → sai type, UX kém
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Nhập số điện thoại">

Lỗi 6: Dòng 11 — Thẻ <select> không có label
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city" required><option value="">--Chọn--</option><option value="hn">Hà Nội</option><option value="hcm">TP.HCM</option></select>

Lỗi 7: Dòng 16 — Checkbox không liên kết với label
Sửa: <input type="checkbox" id="agree" name="agree" required> <label for="agree">Tôi đồng ý điều khoản</label>

Lỗi 8: Dòng 1 — Form thiếu action và method
Sửa: <form action="/submit" method="post">

---

## Câu C2
1. Regex pattern

- CMND/CCCD (12 chữ số): pattern="[0-9]{12}"

- Số tài khoản (10–15 chữ số): pattern="[0-9]{10,15}"

2. HTML5 validation có đủ an toàn cho ứng dụng ngân hàng không?

→ Không đủ an toàn.
Vì HTML5 validation chỉ hoạt động phía client, có thể bị bypass bằng cách tắt JavaScript hoặc chỉnh sửa request. Nó không kiểm soát được dữ liệu phía server và không chống được các tấn công bảo mật.
→ Chỉ nên dùng để cải thiện trải nghiệm người dùng, còn validation quan trọng phải xử lý ở backend.

3. 3 loại validation HTML5 không làm được

- So sánh nhiều trường (ví dụ: mật khẩu và nhập lại mật khẩu)
- Kiểm tra dữ liệu trong database (ví dụ: email đã tồn tại hay chưa)
- Xử lý logic phức tạp (ví dụ: điều kiện nhiều bước như tuổi ≥ 18)

4. 2 rủi ro bảo mật nếu chỉ validate frontend

- Bypass validation: hacker gửi request trực tiếp tới server và bỏ qua toàn bộ kiểm tra
- Injection attack: nhập dữ liệu độc hại (SQL, script) nếu backend không validate

---






