## PHẦN A 

---

### Câu A1 — DOM Tree

## 1. DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

---

# 2. Query Selector

## Chọn thẻ `<h1>`

```javascript
document.querySelector("h1");
```

---

## Chọn input trong form

```javascript
document.querySelector("#todoForm input");
```

---

## Chọn tất cả `.todo-item`

```javascript
document.querySelectorAll(".todo-item");
```

---

## Chọn link đang active

```javascript
document.querySelector("a.active");
```

---

## Chọn `<li>` đầu tiên trong `#todoList`

```javascript
document.querySelector("#todoList li");
```

---

## Chọn tất cả `<a>` bên trong `<nav>`

```javascript
document.querySelectorAll("nav a");
```
# Câu A2 — innerHTML vs textContent

## 1. Sự khác nhau giữa `innerHTML` và `textContent`

| `innerHTML`                          | `textContent`                              |
| ------------------------------------ | ------------------------------------------ |
| Đọc hoặc ghi nội dung dưới dạng HTML | Đọc hoặc ghi nội dung dưới dạng text thuần |
| Có thể render thẻ HTML               | Không render HTML                          |
| Chậm hơn vì phải parse HTML          | Nhanh và an toàn hơn                       |
| Có nguy cơ bị XSS                    | An toàn hơn với dữ liệu người dùng         |

---

# 2. Ví dụ sử dụng

## Dùng `innerHTML`

Khi muốn chèn HTML vào trang:

```javascript id="pq4a3d"
document.querySelector("#box").innerHTML =
    "<h2>Hello</h2>";
```

Kết quả:

```html id="7vlfcq"
<h2>Hello</h2>
```

sẽ được render thành heading thật.

---

## Dùng `textContent`

Khi chỉ muốn hiển thị text:

```javascript id="cc0ee9"
document.querySelector("#box").textContent =
    "<h2>Hello</h2>";
```

Kết quả hiển thị:

```text id="c1b1n9"
<h2>Hello</h2>
```

không render thành HTML.

---

# 3. Tại sao `innerHTML` gây lỗ hổng XSS?

`innerHTML` sẽ parse dữ liệu thành HTML thật.

Nếu user nhập mã độc JavaScript, trình duyệt có thể thực thi code đó.

Đây gọi là:

```text id="j22bjl"
XSS (Cross Site Scripting)
```

Kẻ tấn công có thể:

* Chạy JavaScript trái phép
* Đánh cắp cookie
* Chiếm session đăng nhập
* Redirect sang website độc hại

---

# 4. Ví dụ XSS nguy hiểm

User nhập:

```html id="u7xb3m"
<img src=x onerror="alert('Hacked!')">
```

Code:

```javascript id="ktmjlwm"
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

Khi render:

```html id="4ch33r"
<img src=x onerror="alert('Hacked!')">
```

event `onerror` sẽ chạy JavaScript:

```javascript id="76x1jq"
alert("Hacked!");
```

=> Website bị XSS.

---

# 5. Cách sửa an toàn

Dùng `textContent` thay vì `innerHTML`:

```javascript id="w20s3t"
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

Khi đó:

```html id="u8lrp9"
<img src=x onerror="alert('Hacked!')">
```

chỉ được hiển thị như text bình thường, không thực thi JavaScript.

---

# 6. Kết luận

* `innerHTML`

  * Dùng khi cần render HTML
  * Nguy cơ XSS nếu dữ liệu từ user

* `textContent`

  * Dùng cho dữ liệu người dùng
  * An toàn và nhanh hơn

# Câu A3 — Event Bubbling

## 1. Khi click vào button

Event sẽ xảy ra theo cơ chế:

```text id="smk51r"
Event Bubbling
```

Tức là event đi từ phần tử con → cha.

Thứ tự:

```text id="hdd2od"
button → inner → outer
```

---

# 2. Output khi KHÔNG dùng `stopPropagation()`

Code:

```javascript id="z9qqcr"
document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
});
```

Khi click button:

```text id="r4k0x8"
BUTTON
INNER
OUTER
```

---

# 3. Giải thích

* Click xảy ra ở `#btn`
* Sau đó event bubble lên `#inner`
* Cuối cùng bubble lên `#outer`

---

# 4. Nếu uncomment `e.stopPropagation()`

Code:

```javascript id="5agql0"
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");

    e.stopPropagation();
});
```

`stopPropagation()` sẽ chặn event bubble lên phần tử cha.

Output:

```text id="9x1smu"
BUTTON
```

---

# 5. Kết luận

| Trường hợp                     | Output                 |
| ------------------------------ | ---------------------- |
| Không dùng `stopPropagation()` | BUTTON → INNER → OUTER |
| Có `stopPropagation()`         | BUTTON                 |

# Câu C1 (8đ) — Debug DOM Code

## ❌ Danh sách lỗi và cách sửa

### 1. Sai event name (onclick)
```javascript
document.querySelector("#decrementBtn").addEventListener("onclick", function() {
```

✔ Sửa:
```javascript
document.querySelector("#decrementBtn").addEventListener("click", function() {
```

---

### 2. Gán sai DOM element
```javascript
countDisplay = count;
```

✔ Sửa:
```javascript
countDisplay.textContent = count;
```

---

### 3. Reset history sai
```javascript
historyList.innerHTML = null;
```

✔ Sửa:
```javascript
historyList.innerHTML = "";
```

---

### 4. localStorage trả string
```javascript
count = localStorage.getItem("count");
```

✔ Sửa:
```javascript
count = Number(localStorage.getItem("count")) || 0;
```

---

### 5. Sai remove trong clear history
```javascript
item.remove;
```

✔ Sửa:
```javascript
item.remove();
```

---

### 6. innerHTML không cần thiết
```javascript
countDisplay.innerHTML = count;
```

✔ Sửa:
```javascript
countDisplay.textContent = count;
```

---

### 7. deleteHistory tối ưu
```javascript
element.parentNode.removeChild(element);
```

✔ Sửa:
```javascript
element.remove();
```

---

## ✅ Code đã sửa

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {

    count++;
    countDisplay.textContent = count;

    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;

    li.addEventListener("click", function() {
        deleteHistory(this);
    });

    historyList.appendChild(li);
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});

function deleteHistory(element) {
    element.remove();
}

document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => item.remove());
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    count = Number(localStorage.getItem("count")) || 0;
    countDisplay.textContent = count;
});
```

---

# Câu C2 (7đ) — Performance

## 1. Event Binding vs Event Delegation

- Binding 1000 events → tốn memory + chậm render
- Event Delegation → 1 event ở parent

```javascript
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log("clicked");
    }
});
```

## 2. DocumentFragment

### ❌ Bad:
1000 lần append → 1000 reflow

### ✅ Good:
```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

✔ Chỉ 1 lần reflow → nhanh hơn nhiều
