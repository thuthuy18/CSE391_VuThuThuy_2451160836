# Phần A - Kiểm tra đọc hiểu
## Câu A1 - 3 Cách nhúng CSS

Cách 1: Inline CSS (trong thẻ):

- VÍ DỤ: `<h1 style="color: red; font-size: 24px;">Hello</h1>`
- Ưu điểm: Nhanh, đơn giản, phù hợp chỉnh sửa 1 phần tử riêng lẻ, không cần tạo file CSS riêng
- Nhược điểm: Code khó bảo trì khi website lớn, phải viết lặp lại nhiều lần, không tái sử dụng được
- Khi nào nên dùng: Test nhanh giao diện, chỉnh sửa tạm thời

Cách 2: Internal CSS (trong `<style>`):

- VÍ DỤ: 
```html
<head>
    <style>
        h1 { color: red; font-size: 24px; }
    </style>
</head>
```
- Ưu điểm: dễ quản lý hơn inline, không cần file CSS riêng, có thể áp dụng cho nhiều phần tử
- Nhược điểm: chỉ dùng được cho 1 trang HTML, không tái sử dụng cho nhiều trang
- Khi nào nên dùng: website nhỏ, trang đơn, bài thực hành

Cách 3: External CSS (file riêng)

- VÍ DỤ:
```html 
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
- Ưu điểm: quản lý dễ dành, tái sử dụng cho nhiều trang, code gọn gàng, dễ bảo trì
- Nhược điểm: cần tạo thêm file CSS, nếu file CSS lỗi hoặc không tải được thì giao diện mất style
- Khi nào nên dùng: website lớn, dự án thực tế

Câu hỏi thêm:

    Thứ tự ưu tiên: Inline CSS > Internal CSS > External CSS

    Giải thích: CSS hoạt động theo nguyên tắc Cascade(xếp tầng): độ ưu tiên selector, vị trí khai báo, loại CSS sử dụng

    Inline CSS được viết trực tiếp trên element nên có độ ưu tiên cao hơn internal và external CSS

    ## Câu A2 - CSS Selectors - Dự đoán kết quả

1. `h1`

`<h1>ShopTLU</h1>`

ShopTLU

2. `.price`

`<p class="price">25.990.000đ</p>`
`<p class="price">45.990.000đ</p>`

25.990.000đ

45.990.000đ

3. `#app header`

`<header class="top-bar dark">...</header>`

ShopTLU

Home

Products

About

4. `nav a:first-child`

`<a href="/" class="active">Home</a>`

Home

5. `.product.featured h2`

```html
<article class="product featured">
    <h2>MacBook Pro</h2>
```

MacBook Pro

6. `article > p`

```html
<p class="price">25.990.000đ</p>
<p>Mô tả sản phẩm...</p>
<p class="price">45.990.000đ</p>
<p>Mô tả sản phẩm...</p>
```

25.990.000đ

Mô tả sản phẩm...

45.990.000đ

Mô tả sản phẩm...

7. `a[href="/"]`
`<a href="/" class="active">Home</a>`

Home

8. `.top-bar.dark h1`

```html 
<header class="top-bar dark">
     <h1>ShopTLU</h1>
```

ShopTLU