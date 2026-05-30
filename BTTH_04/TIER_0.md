# Tier 0 — Component đầu tiên (Làm quen cú pháp React)
## 📝 Bài 0.1 — Chạy React đầu tiên

# Giải thích câu hỏi

## 1. File `.jsx` khác gì file `.js`?

### File `.js`

Dùng để viết JavaScript thông thường.

Ví dụ:

```js
const name = "Thủy";
console.log(name);
```

File `.js` chỉ chứa code JavaScript bình thường.

---

### File `.jsx`

Dùng để viết JavaScript có chứa JSX.

Ví dụ:

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

Trong React, JSX cho phép viết giao diện HTML bên trong JavaScript.

Ví dụ:

```jsx
<h1>Hello</h1>
```

Đây gọi là:

```txt
JSX = JavaScript XML
```

React sẽ tự chuyển JSX thành JavaScript thật để trình duyệt hiểu được.

---

## 2. Tại sao phải `export default App`?

Trong React, component thường cần được sử dụng ở file khác.

Ví dụ file `main.jsx` sẽ import component `App`:

```jsx
import App from "./App";
```

Để file khác có thể dùng được component `App`, ta cần export component đó ra ngoài:

```jsx
export default App;
```

Nếu không export thì file khác sẽ không truy cập được component.

---

## 3. Thử xóa `export default App`

Ví dụ:

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

Sau khi xóa:

```jsx
export default App;
```

và save file, React sẽ báo lỗi.

Ví dụ lỗi thường gặp:

```txt
does not provide an export named 'default'
```

Nguyên nhân:

* File `main.jsx` đang cố import component `App`
* Nhưng file `App.jsx` không export component nữa
* Vì vậy React không thể render component lên màn hình

### Bài tập: Viết lại HTML thành JSX
 
# Bài 1 — Component `UserProfile`

```jsx id="g0q7wr"
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img src="photo.jpg" alt="Ảnh đại diện" />

            <table>
                <tr>
                    <td>Họ tên:</td>
                    <td>Minh</td>
                </tr>

                <tr>
                    <td>Email:</td>
                    <td>minh@example.com</td>
                </tr>
            </table>
        </div>
    );
}

export default UserProfile;
```

---

# Giải thích

## 1. `class` → `className`

HTML:

```html id="fp36c6"
<div class="profile">
```

JSX:

```jsx id="ys5s33"
<div className="profile">
```

---

## 2. Thẻ `<img>` phải đóng

HTML:

```html id="mylvns"
<img src="photo.jpg" alt="Ảnh đại diện">
```

JSX:

```jsx id="b3bgj8"
<img src="photo.jpg" alt="Ảnh đại diện" />
```

---

## 3. Component phải return JSX

```jsx id="dk8ll4"
return (
    ...
)
```

---

## 4. Export component

```jsx id="t8r94v"
export default UserProfile;
```

để file khác có thể import và sử dụng.

# Bài 2 — Component `ProductInfo`

```jsx id="76vsl3"
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>

            <p className="price">25.000.000đ</p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```

---

# Giải thích

## 1. `class` đổi thành `className`

HTML:

```html id="1d2yfm"
<p class="price">
```

JSX:

```jsx id="y5thij"
<p className="price">
```

---

## 2. JSX cho phép viết HTML trong JavaScript

Ví dụ:

```jsx id="m9zt9u"
<ul>
    <li>Màn hình: 6.1 inch</li>
</ul>
```

---

## 3. Component React là một function

```jsx id="v6gikf"
function ProductInfo()
```

Function này sẽ trả về giao diện bằng JSX.

---

## 4. Export component

```jsx id="t4szmv"
export default ProductInfo;
```

để component có thể được import ở file khác.

