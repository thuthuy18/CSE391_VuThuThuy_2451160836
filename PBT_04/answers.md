## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 - 5 Loại Positioning

| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                        | Cuộn theo trang?                        | Use case                                  |
| ---------- | ------------------------- | ---------------------------------------- | --------------------------------------- | ----------------------------------------- |
| `static`   | Có                        | Không có tham chiếu, theo thứ tự tài liệu| Có                                      | Mặc định theo layout của trang            |
| `relative` | Có                        | So với vị trí gốc của chính nó           | Có                                      | Dịch chuyển nhẹ, làm mốc cho absolute con |
| `absolute` | Không                     | Thẻ cha gần nhất có position khác static | Có (cuộn cùng cha)                      | Badge trên icon, dropdown, tooltip        |
| `fixed`    | Không                     | Cửa sổ trình duyệt                       | Không — luôn dính tại chỗ               | Chat button, modal overlay                |
| `sticky`   | Có                        | Cửa sổ trình duyệt (sau khi đạt ngưỡng)  | Có → Không (dính khi scroll đến ngưỡng) | Header dính, cột dính trong bảng          |

- Khi nào absolute tham chiếu body?  
- Khi phần tử không có ancestor nào được định vị (relative, absolute, fixed, sticky). Lúc đó nó tham chiếu trực tiếp đến body (thực chất là viewport).

- Khi nào tham chiếu parent?  
- Khi parent (hoặc ancestor gần nhất) có position khác static. Đây chính là nearest positioned ancestor.

- Khái niệm "nearest positioned ancestor":  
- Là phần tử tổ tiên gần nhất có thuộc tính position được thiết lập (không phải static). Phần tử absolute sẽ căn chỉnh tọa độ dựa trên hộp chứa (containing block) của ancestor này. Nếu không có, nó mặc định căn theo viewport.

### Câu A2 (10đ) — Flexbox vs Grid
```
/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
/* 4 items → Bố cục = ??? */
```

```
┌───────────────────────────────────────────────┐
│  CONTAINER (100% width)                       │
│ ┌───────┬───────┬───────┬───────┐             │
│ │ Item1 │ Item2 │ Item3 │ Item4 │             │
│ │ 25%   │ 25%   │ 25%   │ 25%   │             │
│ └───────┴───────┴───────┴───────┘             │
└───────────────────────────────────────────────┘
```

=> Giải thích : Flex, 4 items, `flex:1`
- Các item chia đều chiều ngang container.
- Vì `flex:1` → mỗi item chiếm tỷ lệ bằng nhau.
- Kết quả: 1 hàng, 4 ô bằng nhau (25% mỗi ô).
→ Dùng khi muốn phân bố đều các phần tử.

```
/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/* 6 items → Bố cục = ??? (mấy hàng, mấy cột?) */
```

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌─────────────┬─────────────┐                 │
│ │   Item1     │   Item2     │                 │
│ └─────────────┴─────────────┘                 │
│ ┌─────────────┬─────────────┐                 │
│ │   Item3     │   Item4     │                 │
│ └─────────────┴─────────────┘                 │
│ ┌─────────────┬─────────────┐                 │
│ │   Item5     │   Item6     │                 │
│ └─────────────┴─────────────┘                 │
└───────────────────────────────────────────────┘
```
=> Giải thích : `Flex-wrap`, 6 items, width:45% + margin:2.5%
- Mỗi item gần bằng nửa chiều ngang.
- `flex-wrap:` wrap cho phép xuống dòng.
- 6 items → 3 hàng, mỗi hàng 2 item.
→ Dùng để tạo layout dạng lưới đơn giản bằng flex.

```
/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
/* 3 items → Bố cục = ??? */
```

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ Item1             Item2             Item3     │
└───────────────────────────────────────────────┘
```

=> Giải thích : Flex, `justify-content: space-between`
- 3 item nằm trên cùng một hàng.
- Khoảng trống được phân bố đều giữa các item.
- `align-items:` center → căn giữa theo trục dọc.
→ Dùng cho thanh menu hoặc dàn đều nút bấm.

```
/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/* 3 items → Bố cục = ??? */
```

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌───────┬───────────────┬───────┐             │
│ │ Item1 │     Item2     │ Item3 │             │
│ │200px  │     flexible  │200px  │             │
│ └───────┴───────────────┴───────┘             │
└───────────────────────────────────────────────┘
```

=> Giải thích : Grid, `200px 1fr 200px`
- Grid có 3 cột: trái 200px, giữa co giãn, phải 200px.
- 3 item lấp đầy 3 cột.
→ Dùng cho layout kiểu sidebar–content–sidebar.

```
/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/* 7 items → Bố cục = ??? (mấy hàng? item cuối ở đâu?) */
```

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌───────┬───────┬───────┐                     │
│ │ Item1 │ Item2 │ Item3 │                     │
│ └───────┴───────┴───────┘                     │
│ ┌───────┬───────┬───────┐                     │
│ │ Item4 │ Item5 │ Item6 │                     │
│ └───────┴───────┴───────┘                     │
│ ┌───────┐                                     │
│ │ Item7 │                                     │
│ └───────┘                                     │
└───────────────────────────────────────────────┘
```

=> Giải thích : Grid, `repeat(3,1fr)` với 7 items
- Grid có 3 cột bằng nhau.
- 7 items → 3 hàng:
- Hàng 1: 3 item
- Hàng 2: 3 item
- Hàng 3: còn lại 1 item ở cột đầu tiên
→ Dùng cho bố cục dạng lưới đều, item cuối lẻ nằm một mình.

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 - Flexbox vs Grid

### 1. Navigation bar ngang (logo + menu + buttons)

**Dùng:** Flexbox

**Giải thích:**  Vì navbar là layout 1 chiều (ngang). `Flexbox` rất mạnh cho việc căn hàng ngang, `justify-content` và `align-items`.

### 2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

**Dùng:** Grid 

**Giải thích:** Vì đây là layout dạng lưới 2 chiều (hàng + cột). Grid giúp chia cột đều rất dễ bằng `grid-template-columns`.

### 3. Layout blog: main content + sidebar

**Dùng:** Grid

**Giải thích:** Vì Layout có nhiều vùng rõ ràng (main + sidebar) nên Grid phù hợp hơn để chia bố cục tổng thể.

### 4. Footer với 4 cột thông tin

**Dùng:** Grid

**Giải thích:** Cả hai đều dùng được. Nếu cần 4 cột đều nhau → Grid tiện hơn. Nếu chỉ xếp ngang đơn giản → Flexbox cũng ổn.

### 5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

**Dùng:** Flexbox

**Giải thích:** Vì card là layout 1 chiều theo cột. Dùng `flex-direction`: `column` và `margin-top`: `auto` để đẩy nút xuống đáy rất tiện.

### Câu C2 — Debug Flexbox

Layout sau bị lỗi. Mô tả lỗi và sửa.

**Lỗi 1:** Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

```css
.card-container { display: flex; flex-wrap: wrap; }
.card { width: 30%; margin: 1.5%; }
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; }
```
Nguyên nhân

Các `card` có lượng text khác nhau nên chiều cao khác nhau.
Nút `.btn` không được đẩy xuống đáy card nên bị lệch lên/xuống

Code sửa:

```css
.card-container{
    display: flex;
    flex-wrap: wrap;
}

.card{
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card img{
    width: 100%;
}

.card h3{
    font-size: 18px;
}

.card .btn{
    padding: 10px;

    margin-top: auto;
}
```
## Giải thích sửa

- `display: flex`
- `flex-direction: column`

giúp card sắp xếp theo chiều dọc.

`margin-top: auto;`
sẽ đẩy nút xuống đáy card → tất cả nút nằm cùng hàng.

---


### Lỗi 2 — Item không nằm giữa màn hình

 Nguyên nhân

Container `.hero` chỉ có:
```css
display: flex;
```

nhưng chưa dùng:
- `justify-content`
- `align-items`

nên item mặc định nằm góc trái trên.

---

 Code lỗi

```css
.hero {
    height: 100vh;
    display: flex;
}

.hero-content {
    text-align: center;
}
```

---

 Code sửa

```css
.hero {
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}
```

---

## Giải thích sửa

- `justify-content: center`
→ căn giữa theo chiều ngang

- `align-items: center`
→ căn giữa theo chiều dọc

Kết quả: nội dung nằm chính giữa màn hình.

---

---

### Lỗi 3 — Sidebar bị co lại

 Nguyên nhân

Trong Flexbox, các item mặc định có thể bị co (`flex-shrink: 1`).

Khi content quá dài, sidebar bị ép nhỏ lại.

---

 Code lỗi

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
}

.content {
    flex: 1;
}
```

---

 Code sửa

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;

    flex-shrink: 0;
}

.content {
    flex: 1;
}
```

---

## Giải thích sửa

`flex-shrink: 0;`

ngăn sidebar bị co nhỏ khi content dài.

Sidebar sẽ luôn giữ đúng chiều rộng 250px.

---












