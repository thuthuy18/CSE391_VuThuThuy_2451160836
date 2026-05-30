# Tier 1 — Hiểu luồng hoạt động của React

## 📝 Bài 1.1 — Component render lần đầu

### Giải thích
# React hoạt động như thế nào khi viết `<App />`

Khi React thấy:

```jsx id="d11g9l"
<App />
```

React sẽ thực hiện các bước sau:

## 1. Gọi function `App()`

Ví dụ:

```jsx id="p9o1me"
function App() {
    return <h1>Hello React</h1>;
}
```

React sẽ tự động chạy:

```jsx id="xtzc9z"
App()
```

---

## 2. Lấy kết quả `return`

Function component sẽ trả về JSX:

```jsx id="ic5fb4"
<h1>Hello React</h1>
```

React sẽ lấy phần JSX này.

---

## 3. Hiển thị lên màn hình

Sau khi lấy JSX, React sẽ render giao diện lên trình duyệt để người dùng nhìn thấy.

---

# Kết luận

Khi viết:

```jsx id="y1p4cz"
<App />
```

React thực chất đang:

1. Gọi function component
2. Chạy code bên trong component
3. Lấy JSX từ `return`
4. Hiển thị giao diện lên màn hình


# Câu hỏi 1 — Tại sao component chỉ render 1 lần?

Component chỉ render 1 lần vì sau lần render đầu tiên không có dữ liệu nào thay đổi.

Khi trang web mở:

1. React gọi function component
2. Chạy toàn bộ code bên trong component
3. Lấy JSX trong `return`
4. Hiển thị giao diện lên màn hình

Sau đó React sẽ dừng lại và không render thêm lần nào nữa nếu không có thay đổi xảy ra.

---

## React chỉ render lại khi:

### 1. State thay đổi

Ví dụ:

```jsx id="x5y23y"
setCount(count + 1)
```

Khi state thay đổi, React sẽ render lại component để cập nhật giao diện mới.

---

### 2. Props thay đổi

Ví dụ ban đầu:

```jsx id="2wgozs"
<User name="Minh" />
```

Sau đó đổi thành:

```jsx id="t6sjlf"
<User name="An" />
```

Vì props thay đổi nên component sẽ render lại.

---

### 3. Component cha render lại

Nếu component cha render lại thì component con bên trong cũng sẽ render lại theo.

---

# Câu hỏi 2 — Khi nào component render lại?

Component sẽ render lại khi React phát hiện dữ liệu liên quan đến component bị thay đổi.

Các trường hợp phổ biến:

* State thay đổi
* Props thay đổi
* Parent component render lại

---

## Ví dụ state thay đổi

```jsx id="0l7azv"
setCount(count + 1)
```

Sau khi chạy `setCount`, React sẽ render lại component để cập nhật giá trị mới lên giao diện.

---

## Ví dụ props thay đổi

Ban đầu:

```jsx id="4pqcrk"
<User name="Minh" />
```

Sau đó:

```jsx id="pgt14u"
<User name="An" />
```

Component `User` sẽ render lại vì prop `name` đã thay đổi.

---

## Ví dụ parent component render lại

Khi component cha render lại, tất cả component con bên trong cũng sẽ render lại theo để đảm bảo giao diện luôn đồng bộ.

## 📝 Bài 1.2 — Biến "bình thường" vs useState 

### Vấn đề: Biến bình thường không làm UI cập nhật!

# So sánh Biến thường và useState

|                  | Biến bình thường | useState                                |
| ---------------- | ---------------- | --------------------------------------- |
| Khai báo         | `let count = 0`  | `const [count, setCount] = useState(0)` |
| Thay đổi giá trị | `count = 5`      | `setCount(5)`                           |
| UI cập nhật?     | ❌ Không          | ✅ Có                                    |
| React re-render? | ❌ Không          | ✅ Có                                    |

---

# Giải thích

## 1. Biến bình thường

Ví dụ:

```jsx
let count = 0;
```

Khi thay đổi:

```jsx
count = count + 1;
```

giá trị trong JavaScript có thay đổi, nhưng React không biết dữ liệu đã đổi nên giao diện không cập nhật.

---

## 2. useState

Ví dụ:

```jsx
const [count, setCount] = useState(0);
```

Khi gọi:

```jsx
setCount(count + 1);
```

React sẽ:

1. cập nhật state
2. render lại component
3. cập nhật giao diện mới lên màn hình

---

# Kết quả thử nghiệm

## BadCounter

Sau khi nhấn nút:

* Console tăng:

```txt
1 → 2 → 3
```

* Nhưng giao diện vẫn hiển thị:

```txt
0
```

Nguyên nhân: biến thường không làm React re-render component.

---

## GoodCounter

Sau khi nhấn nút:

* Giao diện cập nhật:

```txt
0 → 1 → 2 → 3
```

Nguyên nhân: `useState` làm React render lại component mỗi khi state thay đổi.

---

# Console render mấy lần?

Mỗi lần gọi:

```jsx
setCount()
```

React sẽ render lại component một lần để cập nhật giao diện.
