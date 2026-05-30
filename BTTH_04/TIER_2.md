# Tier 2 — Biến trong JSX (Đưa dữ liệu vào giao diện)

## 📝 Bài 2.1 — Hiển thị biến đơn giản 

### Thử thách 

# Code các thử thách — JSX Variables

```jsx
function ChallengeDemo() {

    // =========================
    // Thử thách1: Thông tin cá nhân
    // =========================

    const ten = "Vũ thu thủy";

    const tuoi = 20;

    const queQuan = "Hà Nội";


    // =========================
    // Thử thách 2: Chào sáng / chiều / tối
    // =========================

    const gio = new Date().getHours();

    const loiChao =
        gio < 12
            ? " Chào buổi sáng"
            : gio < 18
            ? " Chào buổi chiều"
            : " Chào buổi tối";


    // =========================
    // Thử thách 3: Tính BMI
    // =========================

    const canNang = 44;

    const chieuCao = 1.6;

    const bmi = canNang / (chieuCao * chieuCao);

    const laSinhVien = true;

    const monHoc = ["HTML", "CSS", "JS", "React"];
    // =========================
    // JSX
    // =========================

    return (
        <div style={{ padding: "20px" }}>

            <h1>Xin chào {ten}!</h1>

            <p>{loiChao}</p>

            <p>Tuổi: {tuoi}</p>

            <p>Năm sau: {tuoi + 1}</p>

            <p>BMI: {bmi.toFixed(2)}</p>

            <p>
                Sinh viên:
                {laSinhVien ? " Có" : " Không"}
            </p>

            <p>Quê quán: {queQuan}</p>

            <h2>Môn học yêu thích:</h2>

            <p>{monHoc.join(", ")}</p>

        </div>
    );
}

export default SimpleVariables;
```

---

# Giải thích

## 1. Thông tin cá nhân

```jsx
const ten = "Vũ thu thủy";
const tuoi = 20;
const queQuan = "Hà Nội";
```

Tạo các biến JavaScript để lưu thông tin cá nhân.

Hiển thị lên giao diện bằng JSX:

```jsx
<p>Họ tên: {ten}</p>
<p>Tuổi: {tuoi}</p>
<p>Quê quán: {queQuan}</p>
```

---

## 2. Chào sáng / chiều / tối

Lấy giờ hiện tại:

```jsx
const gio = new Date().getHours();
```

Tạo lời chào bằng ternary operator:

```jsx
const loiChao =
    gio < 12
        ? " Chào buổi sáng"
        : gio < 18
        ? " Chào buổi chiều"
        : " Chào buổi tối";
```

Hiển thị:

```jsx
<p>{loiChao}</p>
```

---

## 3. Tính BMI

Tạo dữ liệu:

```jsx
const canNang = 44;
const chieuCao = 1.6;
```

Tính BMI:

```jsx
const bmi = canNang / (chieuCao * chieuCao);
```

Hiển thị:

```jsx
<p>BMI: {bmi.toFixed(2)}</p>
```

`toFixed(2)` dùng để làm tròn 2 chữ số thập phân.

## 📝 Bài 2.2 — Conditional Rendering (Hiển thị có điều kiện)

# Các thử thách — Conditional Rendering

```jsx id="z8q1pf"
function ConditionalChallenges() {

    // =========================
    // Online / Offline
    // =========================

    const isOnline = true;


    // =========================
    // Đăng nhập
    // =========================

    const isLoggedIn = true;


    // =========================
    // Tồn kho sản phẩm
    // =========================

    const stock = 0;


    return (
        <div style={{ padding: "20px" }}>

            <h1>📝 Conditional Rendering Challenges</h1>


            {/* ========================= */}
            {/* Online / Offline */}
            {/* ========================= */}

            <h2>1️⃣ Trạng thái người dùng</h2>

            <p>
                {isOnline
                    ? "🟢 Đang online"
                    : "🔴 Đang offline"}
            </p>


            {/* ========================= */}
            {/* Menu đăng nhập */}
            {/* ========================= */}

            <h2>2️⃣ Menu người dùng</h2>

            {isLoggedIn && (

                <ul>
                    <li>🏠 Trang chủ</li>
                    <li>👤 Hồ sơ</li>
                    <li>⚙️ Cài đặt</li>
                </ul>

            )}

            {!isLoggedIn && (
                <p>❌ Vui lòng đăng nhập để xem menu</p>
            )}


            {/* ========================= */}
            {/* Kiểm tra tồn kho */}
            {/* ========================= */}

            <h2>3️⃣ Trạng thái sản phẩm</h2>

            <p>Sản phẩm: iPhone 15</p>

            <p>
                {stock === 0
                    ? "❌ Hết hàng"
                    : "✅ Còn hàng"}
            </p>

        </div>
    );
}

export default ConditionalChallenges;
```

---

# Giải thích

## 1. Online / Offline

```jsx id="5vwfpr"
{isOnline
    ? "🟢 Đang online"
    : "🔴 Đang offline"}
```

Dùng toán tử 3 ngôi (`? :`) để hiển thị trạng thái online hoặc offline.

---

## 2. Hiện / Ẩn menu

```jsx id="tmx8bi"
{isLoggedIn && (...) }
```

Nếu `isLoggedIn = true` → menu sẽ hiển thị.

Nếu `false` → menu sẽ bị ẩn.

---

## 3. Hết hàng / Còn hàng

```jsx id="rqz8kv"
{stock === 0
    ? "❌ Hết hàng"
    : "✅ Còn hàng"}
```

Kiểm tra số lượng sản phẩm:

* `0` → Hết hàng
* lớn hơn `0` → Còn hàng

## 📝 Bài 2.3 — Render danh sách (List Rendering)

# Tổng hợp các thử thách — List Rendering

```jsx
function ProductListDemo() {

    // =========================
    // Danh sách sản phẩm
    // =========================

    const products = [

        {
            id: 1,
            name: "iPhone 15",
            price: 25000000
        },

        {
            id: 2,
            name: "AirPods Pro",
            price: 5000000
        },

        {
            id: 3,
            name: "Chuột Gaming",
            price: 500000
        },

        {
            id: 4,
            name: "Laptop Dell",
            price: 30000000
        },

        {
            id: 5,
            name: "Bàn phím cơ",
            price: 1500000
        }

    ];


    // =========================
    // Tính tổng giá
    // =========================

    const total = products.reduce(

        (sum, product) => sum + product.price,

        0

    );


    return (
        <div style={{ padding: "20px" }}>

            <h1>📝 Product List Rendering</h1>


            {/* ========================= */}
            {/* Danh sách sản phẩm */}
            {/* ========================= */}

            <h2>1️⃣ Danh sách sản phẩm</h2>

            {products.map(product => (

                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        marginBottom: "10px"
                    }}
                >

                    <p>
                        Tên sản phẩm:
                        {product.name}
                    </p>

                    <p
                        style={{
                            color:
                                product.price > 1000000
                                    ? "red"
                                    : "black"
                        }}
                    >
                        Giá:
                        {product.price.toLocaleString()}đ
                    </p>

                </div>

            ))}


            {/* ========================= */}
            {/* Tổng giá */}
            {/* ========================= */}

            <h2>2️⃣ Tổng giá tất cả sản phẩm</h2>

            <p>
                Tổng tiền:
                {total.toLocaleString()}đ
            </p>

        </div>
    );
}

export default ProductListDemo;
```

---

# Giải thích

## 1. Render danh sách bằng `map()`

```jsx
{products.map(product => (

    <div key={product.id}>
        ...
    </div>

))}
```

`map()` dùng để duyệt từng phần tử trong array và tạo JSX.

---

## 2. `key`

```jsx
key={product.id}
```

React dùng `key` để theo dõi phần tử nào thay đổi.

Nên dùng `id` thay vì `index`.

---

## 3. Hiển thị giá màu đỏ

```jsx
color:
    product.price > 1000000
        ? "red"
        : "black"
```

Nếu giá sản phẩm lớn hơn 1 triệu → hiển thị màu đỏ.

---

## 4. Tính tổng giá bằng `reduce()`

```jsx
const total = products.reduce(

    (sum, product) => sum + product.price,

    0

);
```

`reduce()` dùng để cộng tất cả giá sản phẩm trong array.

---

## 5. `toLocaleString()`

```jsx
product.price.toLocaleString()
```

Dùng để format số:

```txt
25000000
```

↓

```txt
25,000,000
```


