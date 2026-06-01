# Tier 4 — useState cơ bản

# 📝 Bài 4.1 — useState với số 

## Thử thách:

```jsx
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (

        <div
            style={{
                textAlign: "center",
                padding: "20px"
            }}
        >

            {/* Hiển thị count + đổi màu */}
            <h2
                style={{
                    color:

                        count > 0
                            ? "green"

                            : count < 0
                                ? "red"

                                : "black"
                }}
            >
                Bộ đếm: {count}
            </h2>

            {/* Hiển thị số dương / âm */}
            <p>
                {

                    count > 0
                        ? "Số dương"

                        : count < 0
                            ? "Số âm"

                            : "Bằng 0"

                }
            </p>

            {/* Nút tăng */}
            <button
                onClick={() => setCount(count + 1)}
            >
                Tăng (+1)
            </button>

            {/* Nút giảm */}
            <button
                onClick={() => setCount(count - 1)}
                style={{
                    marginLeft: "10px"
                }}
            >
                Giảm (-1)
            </button>

            {/* Nút reset */}
            <button
                onClick={() => setCount(0)}
                style={{
                    marginLeft: "10px"
                }}
            >
                Reset
            </button>

            {/* Nút nhân đôi */}
            <button
                onClick={() => setCount(count * 2)}
                style={{
                    marginLeft: "10px"
                }}
            >
                Nhân đôi
            </button>

            {/* Thử thách 1: Tăng 5 */}
            <button
                onClick={() => setCount(count + 5)}
                style={{
                    marginLeft: "10px"
                }}
            >
                Tăng (+5)
            </button>

        </div>

    );
}

export default App;
```

---

# 🎯 Các thử thách đã làm

## ✅ Thử thách 1

Thêm nút:

```txt
Tăng (+5)
```

---

## ✅ Thử thách 2

Hiển thị:

* Số dương
* Số âm
* Bằng 0

---

## ✅ Thử thách 3

Đổi màu:

| Giá trị count | Màu  |
| ------------- | ---- |
| > 0           | Xanh |
| < 0           | Đỏ   |
| = 0           | Đen  |

# 📝 Bài 4.2 — useState với chuỗi 

## Thử thách:

```jsx
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h2>Nhập thông tin</h2>

            {/* Input tên */}
            <div
                style={{
                    marginBottom: "10px"
                }}
            >

                <label>Tên: </label>

                <input

                    value={name}

                    onChange={(e) => setName(e.target.value)}

                    placeholder="Nhập tên..."

                />

                {/* Thử thách 1 */}
                <p>{name.length}/100 ký tự</p>

            </div>

            {/* Input email */}
            <div
                style={{
                    marginBottom: "10px"
                }}
            >

                <label>Email: </label>

                <input

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    placeholder="Nhập email..."

                />

                {/* Thử thách 2 */}
                <p>

                    {

                        email.includes("@")
                            ? "✅ Email hợp lệ"

                            : "❌ Email chưa hợp lệ"

                    }

                </p>

            </div>

            {/* Input password */}
            <div
                style={{
                    marginBottom: "10px"
                }}
            >

                <label>Mật khẩu: </label>

                <input

                    type={showPassword ? "text" : "password"}

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                    placeholder="Nhập mật khẩu..."

                />

            </div>

            {/* Thử thách 3 */}
            <button
                onClick={() => setShowPassword(!showPassword)}
            >

                {

                    showPassword
                        ? "Ẩn mật khẩu"

                        : "Hiện mật khẩu"

                }

            </button>

            <h3>Thông tin đã nhập:</h3>

            <p>Tên: {name || "(chưa nhập)"}</p>

            <p>Email: {email || "(chưa nhập)"}</p>

            {/* Preview realtime */}
            {name && (

                <p
                    style={{
                        background: "#f0f0f0",
                        padding: "10px"
                    }}
                >

                    Xin chào <strong>{name}</strong>!

                    Email của bạn là {email}

                </p>

            )}

        </div>

    );
}

export default App;
```
# 📝 Bài 4.3 — useState với boolean 

## Thử thách:

```jsx id="1l84xg"
import { useState } from "react";

function App() {

    const [isVisible, setIsVisible] = useState(true);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    // Thử thách 1
    const [showPassword, setShowPassword] = useState(false);

    // Thử thách 2
    const [isOpen, setIsOpen] = useState(false);

    // Thử thách 3
    const [isLightOn, setIsLightOn] = useState(false);

    const themeStyle = {

        backgroundColor: isDarkMode ? "#333" : "#fff",

        color: isDarkMode ? "#fff" : "#333",

        padding: "20px",

        minHeight: "100vh"

    };

    return (

        <div style={themeStyle}>

            <h2>Toggle Demo</h2>

            {/* Toggle hiện/ẩn nội dung */}
            <button
                onClick={() => setIsVisible(!isVisible)}
            >

                {

                    isVisible
                        ? "Ẩn nội dung"

                        : "Hiện nội dung"

                }

            </button>

            {isVisible && (

                <div
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        border: "1px solid #ddd"
                    }}
                >

                    <p>Đây là nội dung có thể ẩn/hiện!</p>

                </div>

            )}

            <hr />

            {/* Toggle dark mode */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
            >

                {

                    isDarkMode
                        ? "☀️ Light Mode"

                        : "🌙 Dark Mode"

                }

            </button>

            <hr />

            {/* Toggle like */}
            <button
                onClick={() => setIsLiked(!isLiked)}
            >

                {

                    isLiked
                        ? "❤️ Đã thích"

                        : "🤍 Thích"

                }

            </button>

            <hr />

            {/* Thử thách 1: Hiện / Ẩn mật khẩu */}
            <h3>Hiện / Ẩn mật khẩu</h3>

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu..."
            />

            <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                    marginLeft: "10px"
                }}
            >

                {

                    showPassword
                        ? "Ẩn mật khẩu"

                        : "Hiện mật khẩu"

                }

            </button>

            <hr />

            {/* Thử thách 2: Accordion */}
            <h3
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer"
                }}
            >
                📚 React là gì?
            </h3>

            {isOpen && (

                <p>

                    React là thư viện JavaScript dùng để xây dựng giao diện người dùng.

                </p>

            )}

            <hr />

            {/* Thử thách 3: Bật / Tắt bóng đèn */}
            <h3>Bóng đèn</h3>

            <button
                onClick={() => setIsLightOn(!isLightOn)}
            >

                {

                    isLightOn
                        ? "💡 Bật"

                        : "⭕ Tắt"

                }

            </button>

        </div>

    );
}

export default App;
```

# 📝 Bài 4.4 — Kết hợp nhiều useState

## Thử thách đã làm

### Thử thách 1

Thêm trường:

```jsx
Email
```

---

### Thử thách 2

Validate tuổi:

```jsx
Tuổi phải > 0 và < 100
```

---

### Thử thách 3

Hiển thị:

```jsx
👋 Xin chào [tên]!
```

khi người dùng nhập tên.

---

# 📄 Code hoàn chỉnh

```jsx
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [email, setEmail] = useState("");

    const [isStudent, setIsStudent] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {

        if (

            name.trim() === "" ||

            age === "" ||

            email.trim() === ""

        ) {

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;

        }

        // Validate tuổi
        if (age <= 0 || age >= 100) {

            alert("Tuổi phải từ 1 đến 99!");

            return;

        }

        setSubmitted(true);

    }

    function handleReset() {

        setName("");

        setAge("");

        setEmail("");

        setIsStudent(false);

        setSubmitted(false);

    }

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h2>Form đăng ký</h2>

            {!submitted ? (

                <div>

                    {/* Input tên */}
                    <div
                        style={{
                            marginBottom: "10px"
                        }}
                    >

                        <label>Tên: </label>

                        <input

                            value={name}

                            onChange={(e) => setName(e.target.value)}

                        />

                    </div>

                    {/* Thử thách 3 */}
                    {name && (

                        <p>

                            👋 Xin chào {name}!

                        </p>

                    )}

                    {/* Input tuổi */}
                    <div
                        style={{
                            marginBottom: "10px"
                        }}
                    >

                        <label>Tuổi: </label>

                        <input

                            type="number"

                            value={age}

                            onChange={(e) => setAge(e.target.value)}

                        />

                    </div>

                    {/* Thử thách 1 */}
                    <div
                        style={{
                            marginBottom: "10px"
                        }}
                    >

                        <label>Email: </label>

                        <input

                            value={email}

                            onChange={(e) => setEmail(e.target.value)}

                        />

                    </div>

                    {/* Checkbox */}
                    <div
                        style={{
                            marginBottom: "10px"
                        }}
                    >

                        <label>

                            <input

                                type="checkbox"

                                checked={isStudent}

                                onChange={(e) => setIsStudent(e.target.checked)}

                            />

                            Là sinh viên

                        </label>

                    </div>

                    <button onClick={handleSubmit}>

                        Đăng ký

                    </button>

                </div>

            ) : (

                <div
                    style={{
                        background: "#d4edda",
                        padding: "15px",
                        borderRadius: "4px"
                    }}
                >

                    <h3>✅ Đăng ký thành công!</h3>

                    <p>Tên: {name}</p>

                    <p>Tuổi: {age}</p>

                    <p>Email: {email}</p>

                    <p>

                        Sinh viên:

                        {

                            isStudent
                                ? " Có"

                                : " Không"

                        }

                    </p>

                    <button onClick={handleReset}>

                        Đăng ký lại

                    </button>

                </div>

            )}

        </div>

    );
}

export default App;
```

