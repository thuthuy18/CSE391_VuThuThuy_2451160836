# Tier 5 — Events cơ bản (Xử lý sự kiện trong React)

## 📝 Bài 5.1 — Click Events

##  Thử thách 1 — Đổi màu ngẫu nhiên

```jsx id="c8zrx9"
const [color, setColor] = useState("skyblue");

function changeColor() {

    const colors = [

        "red",

        "blue",

        "green",

        "orange",

        "purple"

    ];

    const randomColor = colors[
        Math.floor(Math.random() * colors.length)
    ];

    setColor(randomColor);

}
```

```jsx id="jcrzlk"
<button onClick={changeColor}>

    Đổi màu ngẫu nhiên

</button>

<div
    style={{
        width: "200px",
        height: "100px",
        backgroundColor: color,
        marginTop: "20px"
    }}
>

</div>
```

---

# Thử thách 2 — Đếm click từng nút

```jsx id="u8f4ux"
const [likeCount, setLikeCount] = useState(0);

const [shareCount, setShareCount] = useState(0);
```

```jsx id="pqx3j4"
<button
    onClick={() => setLikeCount(likeCount + 1)}
>

    Like ({likeCount})

</button>

<button
    onClick={() => setShareCount(shareCount + 1)}
    style={{
        marginLeft: "10px"
    }}
>

    Share ({shareCount})

</button>
```

---

# Thử thách 3 — Like Toggle ❤️

```jsx id="8kyz4s"
const [isLiked, setIsLiked] = useState(false);
```

```jsx id="ma5kdz"
<button
    onClick={() => setIsLiked(!isLiked)}
>

    {

        isLiked
            ? "❤️ Đã thích"

            : "🤍 Thích"

    }

</button>
```

# 📝 Bài 5.2 — Input Events (Thử thách)

## ✅ Thử thách 1 — Validation Email

```jsx id="74f4to"
const [email, setEmail] = useState("");
```

```jsx id="fjlwm7"
<input

    value={email}

    onChange={(e) => setEmail(e.target.value)}

    placeholder="Nhập email..."

    style={{
        padding: "8px",
        width: "300px"
    }}

/>
```

```jsx id="hl0jgo"
{
    email.includes("@") ? (

        <p style={{ color: "green" }}>

            ✅ Email hợp lệ

        </p>

    ) : (

        <p style={{ color: "red" }}>

            ❌ Email chưa hợp lệ

        </p>

    )
}
```

---

# ✅ Thử thách 2 — Preview realtime

```jsx id="q4qf5v"
{
    text && (

        <div
            style={{
                background: "#f0f0f0",
                padding: "10px",
                marginTop: "10px"
            }}
        >

            <h3>Preview:</h3>

            <p>{text}</p>

        </div>

    )
}
```

---

# ✅ Thử thách 3 — Đếm số từ

```jsx id="yqnyxt"
<p>

    Số từ:

    {

        text.trim() === ""
            ? 0

            : text.trim().split(" ").length

    }

</p>
```
# 📝 Bài 5.2 — Input Events (Thử thách)

## ✅ Thử thách 1 — Validation Email

```jsx id="74f4to"
const [email, setEmail] = useState("");
```

```jsx id="fjlwm7"
<input

    value={email}

    onChange={(e) => setEmail(e.target.value)}

    placeholder="Nhập email..."

    style={{
        padding: "8px",
        width: "300px"
    }}

/>
```

```jsx id="hl0jgo"
{
    email.includes("@") ? (

        <p style={{ color: "green" }}>

            ✅ Email hợp lệ

        </p>

    ) : (

        <p style={{ color: "red" }}>

            ❌ Email chưa hợp lệ

        </p>

    )
}
```

---

# ✅ Thử thách 2 — Preview realtime

```jsx id="q4qf5v"
{
    text && (

        <div
            style={{
                background: "#f0f0f0",
                padding: "10px",
                marginTop: "10px"
            }}
        >

            <h3>Preview:</h3>

            <p>{text}</p>

        </div>

    )
}
```

---

# ✅ Thử thách 3 — Đếm số từ

```jsx id="yqnyxt"
<p>

    Số từ:

    {

        text.trim() === ""
            ? 0

            : text.trim().split(" ").length

    }

</p>
```
# 📝 Bài 5.3 — Keyboard Events 

## ✅ Thử thách 1 — Game đoán phím

```jsx id="9y8c0q"
const [targetKey, setTargetKey] = useState("a");

const [result, setResult] = useState("");
```

```jsx id="4vm3mg"
function randomKey() {

    const letters = ["a", "s", "d", "f"];

    return letters[
        Math.floor(Math.random() * letters.length)
    ];

}
```

```jsx id="9mbk0i"
function handleGuess(event) {

    if (event.key === targetKey) {

        setResult("🎉 Đúng rồi!");

        setTargetKey(randomKey());

    } else {

        setResult("❌ Sai!");

    }

}
```

---

# ✅ Thử thách 2 — Di chuyển ô vuông

```jsx id="08q70m"
const [x, setX] = useState(0);

const [y, setY] = useState(0);
```

```jsx id="rxfxq4"
function moveBox(event) {

    if (event.key === "ArrowRight") {

        setX(x + 10);

    }

    if (event.key === "ArrowLeft") {

        setX(x - 10);

    }

    if (event.key === "ArrowDown") {

        setY(y + 10);

    }

    if (event.key === "ArrowUp") {

        setY(y - 10);

    }

}
```

---

# ✅ Thử thách 3 — Ctrl + D đổi màu nền

```jsx id="m5nrl5"
const [bgColor, setBgColor] = useState("white");
```

```jsx id="ztivjw"
function handleShortcut(event) {

    if (event.ctrlKey && event.key === "d") {

        event.preventDefault();

        setBgColor(

            bgColor === "white"
                ? "lightblue"

                : "white"

        );

    }

}
```
# 📝 Bài 5.4 — Form Events (Thử thách)

## ✅ Thử thách 1 — Validate email phải có @

```jsx
if (!value.includes("@")) {

    newErrors.email = "Email phải có ký tự @";

}
```

---

# ✅ Thử thách 2 — Thêm trường xác nhận mật khẩu

```jsx
<input

    type="password"

    name="confirmPassword"

    value={formData.confirmPassword}

    onChange={(e) => {

        handleChange(e);

        validateField(
            e.target.name,
            e.target.value
        );

    }}

/>
```

---

# ✅ Thử thách 3 — Hiển thị lỗi realtime

```jsx
{
    errors.confirmPassword && (

        <p style={{ color: "red" }}>

            {errors.confirmPassword}

        </p>

    )
}
```


