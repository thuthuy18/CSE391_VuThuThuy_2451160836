## PHẦN A

### Câu A1 — Viewport & Mobile-First

1.Thẻ `<meta viewport>` chuẩn
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Giải thích:
|Thuộc tính---------|------------------Ý nghĩa-----------------------------------|
|width=device-width	| Chiều rộng trang web bằng đúng chiều rộng màn hình thiết bị|
|initial-scale=1.0	| Mức zoom ban đầu là 100%-----------------------------------|

2.Nếu thiếu thẻ viewport thì iPhone hiển thị thế nào?

Nếu thiếu thẻ này:

- iPhone sẽ giả lập trang web như màn hình desktop (~980px)
- Trang bị thu nhỏ toàn bộ
- Chữ rất bé
- Người dùng phải zoom để đọc
- Responsive có thể hoạt động sai

Ví dụ:

- navbar bị nhỏ
- button khó bấm
- layout không fit màn hình

3. Mobile-First vs Desktop-First

| Mobile-Firs----------------| Desktop-First-------------|
| Thiết kế cho mobile trước  | Thiết kế desktop trước----|
| Dùng min-width-------------| Dùng max-width------------|
| Mặc định là mobile---------| Mặc định là desktop-------|
| Responsive mở rộng dần-----| Responsive thu nhỏ dần----|

Ví dụ Mobile-First (768px)
```css
/* MOBILE */

.box{
    width: 100%;
}

/* TABLET/DESKTOP */

@media(min-width: 768px){

    .box{
        width: 50%;
    }

}
```
Ý nghĩa:
- Mặc định mobile dùng 100%
- Khi màn hình >= 768px → chuyển sang 50%

Ví dụ Desktop-First (768px)
```css
/* DESKTOP */

.box{
    width: 50%;
}

/* MOBILE */

@media(max-width: 768px){

    .box{
        width: 100%;
    }

}
```
Ý nghĩa:

- Mặc định desktop dùng 50%
- Khi màn hình <= 768px → đổi thành 100%

Vì sao Mobile-First được khuyên dùng?

- Mobile hiện chiếm phần lớn lượng truy cập web
- CSS nhẹ hơn cho mobile
- Responsive dễ mở rộng
- Hiệu năng tốt hơn trên điện thoại
- Google ưu tiên Mobile-First Indexing cho SEO