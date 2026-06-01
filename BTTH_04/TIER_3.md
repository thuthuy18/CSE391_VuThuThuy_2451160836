## Tier 3 — Chia Component

# 📝 Thử thách 1 — Tạo component UserCard

## Bước 1: Tạo file `UserCard.jsx`

Trong thư mục:

```txt
src/components
```

tạo file:

```txt
UserCard.jsx
```

---

## Bước 2: Viết code

```jsx
function UserCard({ name, email, avatar }) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                margin: "10px",
                width: "220px",
                textAlign: "center"
            }}
        >

            <img
                src={avatar}
                alt={name}
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%"
                }}
            />

            <h3>{name}</h3>

            <p>{email}</p>

        </div>

    );
}

export default UserCard;
```

---

## Giải thích

| Props  | Ý nghĩa        |
| ------ | -------------- |
| name   | Tên người dùng |
| email  | Email          |
| avatar | Ảnh đại diện   |

---

# 📝 Thử thách 2 — Tạo component PriceTag

## Bước 1: Tạo file `PriceTag.jsx`

Trong:

```txt
src/components
```

tạo file:

```txt
PriceTag.jsx
```

---

## Bước 2: Viết code

```jsx
function PriceTag({ originalPrice, salePrice }) {

    return (

        <div
            style={{
                margin: "20px"
            }}
        >

            <h3>Giá sản phẩm</h3>

            <p
                style={{
                    textDecoration: "line-through",
                    color: "gray"
                }}
            >
                Giá gốc: {originalPrice}đ
            </p>

            <p
                style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}
            >
                Giá sale: {salePrice}đ
            </p>

        </div>

    );
}

export default PriceTag;
```

---

# 📝 Thử thách 3 — Hiển thị 3 UserCard

## Bước 1: Import component

Trong file `App.jsx`:

```jsx
import UserCard from "./components/UserCard";

import PriceTag from "./components/PriceTag";
```

---

## Bước 2: Sử dụng component

```jsx
function App() {

    return (

        <div>

            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Danh sách người dùng
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >

                <UserCard
                    name="Minh"
                    email="minh@gmail.com"
                    avatar="https://i.pravatar.cc/150?img=1"
                />

                <UserCard
                    name="An"
                    email="an@gmail.com"
                    avatar="https://i.pravatar.cc/150?img=2"
                />

                <UserCard
                    name="Linh"
                    email="linh@gmail.com"
                    avatar="https://i.pravatar.cc/150?img=3"
                />

            </div>

            <PriceTag
                originalPrice="25.000.000"
                salePrice="19.000.000"
            />

        </div>

    );
}

export default App;
```

---
