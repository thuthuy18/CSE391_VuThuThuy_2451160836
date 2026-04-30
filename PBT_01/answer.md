Câu A1:

1.Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, các bước xảy ra là:

- Request xuất phát từ laptop đi qua router WiFi
- Qua nhà mạng VNPT chạy xuyên cáp quang dưới đáy Thái Bình Dương
- Đến data center của trụ sở shoppehttps://github.com/thuthuy18/CSE391_VuThuThuy_2451160836/edit/main/PBT_01/answer.md
- Server xử lý request
- Response chạy ngược lại: cáp quang - VNPT - router - laptop
- Chrome nhận file HTML, CSS, JS - render ra giao diện và ta sẽ thấy trang của shoppe.
  (tuan_1_html5\1_introduction_html_universe.md + Phần: 🎬 Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương)

  2.Trong DevTools của Chrome, tab Network cho thấy:

- requests/responses (tuan_1_html5\01_introduction_html_universe.md + phần 4.3)

Câu A2:
Các lỗi semantic là:

- Thẻ div đầu nên để là header tại nó là phần đầu
- Thẻ div có class là menu nên để là nav tại đó là phần điều hướng đến các thẻ điều hướng
- Thẻ div có class main nên đổi thành khối main tại nó là phần chứa nội dung chính
- Thẻ div có class là footer nên đổi thành thẻ footer tại nó là phần cuối kết thúc của trang web
Bản sửa lại:
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article class="product">
        <h1>iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>

<footer>
    © 2026 ShopTLU
</footer>
(tuan_1_html5\04_visible_part_html.md + Bản đồ sementic elements)

Câu A3:

<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>

Đoạn code trên sẽ được mô tả như sau:

|Hộp 1|  
|Text A||Text B|  
|Hộp 2|  
|Text A||Text B|  
|Hộp 3|

+ (div) là thẻ block, nghĩa là nó chiếm nguyên một dòng riêng. Viết xong sẽ tự xuống dòng.
→ Vì vậy Hộp 1, Hộp 2, Hộp 3 mỗi cái nằm một dòng.

+ (span) là thẻ inline, nghĩa là chỉ chiếm phần chữ bên trong nó và không xuống dòng.
→ Vì vậy Text A và Text B nằm cùng một dòng.

+ (strong) cũng là thẻ inline giống <span>, nhưng chữ sẽ in đậm.
→ Vì vậy Text C và Text D vẫn nằm cùng dòng, chỉ khác là Text D đậm hơn.

Nguồn tham khảo: (tuan_1_html5/02_basic_structure_html.md + phần: Các thẻ cơ bản trong <body>)

Câu A4:
Sự khác nhau giữa (thead), (tbody), (tfoot) là:

- (thead) là phần đầu của bảng, thường chứa tiêu đề các cột.
- (tbody) là phần thân bảng, chứa dữ liệu chính của bảng.
- (tfoot) là phần cuối bảng, thường dùng để ghi tổng kết hoặc tổng tiền.

dù có xếp không đúng thứ tự 3 thẻ trên thì dữ liệu nó vẫn sẽ hiển thị theo thứ tự là <thead> -> <tbody> -> <tfoot>

(tham chiếu tuan_1_html5/05_tables_hyperlinks.md + phần: Table bảng dữ liệu)

Không nên dùng table cho việc làm layout là vì:
- Sai semantic
- Không tốt cho SEO và accessibility vì Google khó hiểu cấu trúc trang hơn semantic HTML
- Lồng nhiều <th> với <td> -> Code rối, khó sửa

Câu B3:
Lỗi 1: Dòng 1 — <!DOCTYPE> sai cú pháp — Sửa thành <!DOCTYPE html>

Lỗi 2: Dòng 2 — Thẻ <html> thiếu thuộc tính ngôn ngữ — Sửa thành <html lang="vi">

Lỗi 3: Dòng 4 — Thẻ <title> chưa đóng — Sửa thành <title>Trang web</title>

Lỗi 4: Dòng 5 — utf8 chưa đúng chuẩn — Sửa thành <meta charset="UTF-8">

Lỗi 5: Dòng 8 — Thẻ <h1> đóng sai — Sửa thành <h1>Welcome to ShopTLU</h1>

Lỗi 6: Dòng 12 — Thẻ <a> đầu chưa đóng — Sửa thành <a href="home">Trang chủ</a>

Lỗi 7: Dòng 13 — Link nên dùng đường dẫn chuẩn — Sửa thành <a href="/products">Sản phẩm</a>

Lỗi 8: Dòng 20 — Thuộc tính src thiếu dấu ngoặc kép — Sửa thành <img src="iphone.jpg">

Lỗi 9: Dòng 20 — Ảnh thiếu thuộc tính alt — Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">

Lỗi 10: Dòng 22 — Đóng thẻ sai thứ tự <p> và <b> — Sửa thành <p>Giá: <b>25.990.000đ</b></p>

Lỗi 11: Dòng 29-30 — Hàng tiêu đề bảng dùng <td> thay vì <th> — Sửa thành <th>Tên</th> và <th>Giá</th>

Lỗi 12: Dòng 40 — Dùng thẻ <main> lần thứ hai là sai — Sửa thành <aside>

Lỗi 13: Dòng 42 — Nếu sửa dòng 40 thành <aside> thì phải đóng </aside>

Lỗi 14: Dòng 45 — Thẻ <p> chưa đóng — Sửa thành <p>Copyright 2026</p>

Lỗi 15: Cuối file — Thiếu thẻ đóng </html> — Thêm </html>

Câu B4:
Em chọn website: thegioididong.com

1. Ba thẻ semantic HTML5 mà trang web sử dụng:

+ (header): nằm ở đầu trang, chứa logo, menu, ô tìm kiếm.
+ (footer): nằm cuối trang, chứa thông tin liên hệ và chính sách.
+ (section): dùng để chia các khu vực nội dung như sản phẩm nổi bật, danh mục, tin tức.

2. Hai chỗ chưa dùng semantic tốt (nếu có):

Một số khối sản phẩm dùng nhiều <div> thay vì <article>.

Một số khu menu dùng <div> thay vì <nav>.

3. Table tìm được trên trang:

Table dùng để hiển thị thông số kỹ thuật sản phẩm (ví dụ điện thoại, laptop).

Có sử dụng <tbody>.

Không thấy dùng <thead> rõ ràng ở một số bảng.

Câu C1:

<!-- phần đầu trang -->

    <header> <!-- dùng header vì đây là phần đầu -->
        <h1>Logo</h1> <!-- tiêu đề trang -->
        <nav> <!-- nav để chứa menu -->
            <ul> <!-- danh sách menu -->
                <li>Trang chủ</li>
                <li>Sản phẩm</li>
                <li>Liên hệ</li>
            </ul>
        </nav>
    </header>

    <!-- breadcrumb -->
    <nav> <!-- nav vì dùng để điều hướng -->
        <ol> <!-- ol vì có thứ tự -->
            <li>Trang chủ</li>
            <li>Điện thoại</li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- nội dung chính -->
    <main> <!-- main là nội dung chính -->
        <!-- khu sản phẩm -->
        <section> <!-- section để chia phần -->
            <!-- ảnh sản phẩm -->
            <div> <!-- div để chứa nhiều ảnh -->
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
            </div>

            <!-- thông tin sản phẩm -->
            <div> <!-- dùng div để bao bọc 1 sản phẩm thành 1 card-->
                <h2>Tên sản phẩm</h2> <!-- tiêu đề -->
                <p>Giá: ...</p> <!-- giá -->
                <p>⭐⭐⭐⭐⭐</p> <!-- đánh giá -->
                <p>Mô tả sản phẩm...</p> <!-- mô tả -->
            </div>
        </section>

        <!-- bảng thông số -->
        <section> <!-- section riêng -->
            <h2>Thông số kỹ thuật</h2>
            <table> <!-- table vì là dữ liệu dạng bảng -->
                <tr>
                    <th>Tên</th> <!-- tiêu đề cột -->
                    <th>Chi tiết</th>
                </tr>
                <tr>
                    <td>Màn hình</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>...</td>
                </tr>
            </table>
        </section>

        <!-- đánh giá -->
        <section> <!-- section cho comment -->
            <h2>Bình luận</h2>
            <div> <!-- mỗi bình luận -->
                <p>Người dùng 1</p>
                <p>Rất tốt</p>
            </div>
            <div>
                <p>Người dùng 2</p>
                <p>Ổn</p>
            </div>
        </section>
    </main>

    <!-- sidebar -->
    <aside> <!-- aside vì là nội dung phụ -->
        <h2>Sản phẩm tương tự</h2>
        <div>
            <p>Sản phẩm 1</p>
        </div>
        <div>
            <p>Sản phẩm 2</p>
        </div>
    </aside>

    <!-- footer -->
    <footer> <!-- footer là cuối trang -->
        <p>Thông tin website</p>
    </footer>

Câu C2:

Theo như quan điểm đưa ra chỉ cần dùng <div> cho mọi thứ rồi thêm class là đủ thì có thể tiện lúc đầu, nhưng không phải cách làm tối ưu.Đầu tiên là về SEO. Google cần hiểu cấu trúc trang web để biết đâu là menu, đâu là nội dung chính, đâu là phần cuối trang. Nếu mọi thứ đều là (div), công cụ tìm kiếm sẽ khó phân tích hơn. 

Trong khi đó, các thẻ semantic như (header), (nav), (main), (article), (footer) giúp website rõ ràng và hỗ trợ SEO tốt hơn.

Tiếp theo là về Accessibility. Người dùng khiếm thị thường sử dụng screen reader để truy cập web. Những công cụ này dựa vào semantic HTML để điều hướng nhanh đến từng khu vực. Ví dụ có thể chuyển thẳng đến <nav> để tìm menu hoặc <main> để đọc nội dung chính. Nếu chỉ dùng <div>, trải nghiệm sẽ bất tiện hơn.

Ví dụ cụ thể: Một trang tin tức dùng (article) cho từng bài viết sẽ giúp Google hiểu đó là bài nội dung độc lập, đồng thời screen reader cũng dễ nhận diện từng bài hơn.

Tuy nhiên, (div) vẫn rất cần thiết trong thực tế. Nó phù hợp để chia layout, gom nhóm phần tử hoặc dùng với CSS Grid/Flexbox.
Vì vậy, semantic HTML nên dùng để tạo cấu trúc có nghĩa, còn <div> dùng để hỗ trợ bố cục. Kết hợp cả hai mới là cách làm hiệu quả nhất.
  
