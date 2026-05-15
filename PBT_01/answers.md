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