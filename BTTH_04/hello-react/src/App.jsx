import { useState } from "react";

function App() {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        confirmPassword: "",

        message: ""

    });

    const [submitted, setSubmitted] = useState(false);

    const [errors, setErrors] = useState({});

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value

        });

    }

    function validateField(name, value) {

        let newErrors = { ...errors };

        // Validate email
        if (name === "email") {

            if (!value.includes("@")) {

                newErrors.email = "Email phải có ký tự @";

            } else {

                delete newErrors.email;

            }

        }

        // Validate confirm password
        if (name === "confirmPassword") {

            if (value !== formData.password) {

                newErrors.confirmPassword = "Mật khẩu không khớp";

            } else {

                delete newErrors.confirmPassword;

            }

        }

        setErrors(newErrors);

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (

            formData.name === "" ||

            formData.email === "" ||

            formData.password === "" ||

            formData.confirmPassword === ""

        ) {

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;

        }

        if (Object.keys(errors).length > 0) {

            alert("Form còn lỗi!");

            return;

        }

        setSubmitted(true);

    }

    function handleReset() {

        setFormData({

            name: "",

            email: "",

            password: "",

            confirmPassword: "",

            message: ""

        });

        setErrors({});

        setSubmitted(false);

    }

    return (

        <div style={{ padding: "20px" }}>

            <h2>Form Events</h2>

            {

                !submitted ? (

                    <form onSubmit={handleSubmit}>

                        <div style={{ marginBottom: "10px" }}>

                            <label>Tên: </label>

                            <input

                                name="name"

                                value={formData.name}

                                onChange={(e) => {

                                    handleChange(e);

                                    validateField(
                                        e.target.name,
                                        e.target.value
                                    );

                                }}

                            />

                        </div>

                        <div style={{ marginBottom: "10px" }}>

                            <label>Email: </label>

                            <input

                                name="email"

                                value={formData.email}

                                onChange={(e) => {

                                    handleChange(e);

                                    validateField(
                                        e.target.name,
                                        e.target.value
                                    );

                                }}

                            />

                            {

                                errors.email && (

                                    <p style={{ color: "red" }}>

                                        {errors.email}

                                    </p>

                                )

                            }

                        </div>

                        <div style={{ marginBottom: "10px" }}>

                            <label>Mật khẩu: </label>

                            <input

                                type="password"

                                name="password"

                                value={formData.password}

                                onChange={handleChange}

                            />

                        </div>

                        <div style={{ marginBottom: "10px" }}>

                            <label>Xác nhận mật khẩu: </label>

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

                            {

                                errors.confirmPassword && (

                                    <p style={{ color: "red" }}>

                                        {errors.confirmPassword}

                                    </p>

                                )

                            }

                        </div>

                        <div style={{ marginBottom: "10px" }}>

                            <label>Tin nhắn: </label>

                            <textarea

                                name="message"

                                value={formData.message}

                                onChange={handleChange}

                                rows={4}

                                style={{ width: "100%" }}

                            />

                        </div>

                        <button type="submit">

                            Gửi

                        </button>

                        <button
                            type="button"
                            onClick={handleReset}
                        >

                            Xóa

                        </button>

                    </form>

                ) : (

                    <div
                        style={{
                            background: "#d4edda",
                            padding: "15px",
                            borderRadius: "4px"
                        }}
                    >

                        <h3>✅ Đăng ký thành công!</h3>

                        <p>Tên: {formData.name}</p>

                        <p>Email: {formData.email}</p>

                        <p>Tin nhắn: {formData.message}</p>

                        <button onClick={handleReset}>

                            Gửi lại

                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default App;