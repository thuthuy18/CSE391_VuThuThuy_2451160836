# Tier 6 — Lists & CRUD (Danh sách và Thêm/Sửa/Xóa)

# 📝 Bài 6.1 — Render danh sách (Thử thách)

## ✅ Thử thách 1 — Hiển thị STT

```jsx
students.map((student, index) => (

    <div key={student.id}>

        {index + 1}. {student.name}

    </div>

))
```

---

# ✅ Thử thách 2 — Sinh viên tuổi >= 20 màu xanh

```jsx
style={{

    color:

        student.age >= 20

            ? "green"

            : "black"

}}
```

---

# ✅ Thử thách 3 — Tính tuổi trung bình

```jsx
const averageAge =

    students.reduce(

        (sum, student) => sum + student.age,

        0

    ) / students.length;
```
# 📝 Bài 6.2 — CREATE (Thử thách)

## ✅ Thử thách 1 — Validate tên không được trống

```jsx
if (newName.trim() === "") {

    alert("Tên không được để trống!");

    return;

}
```

---

# ✅ Thử thách 2 — Hiển thị thêm thành công

```jsx
const [message, setMessage] = useState("");
```

```jsx
setMessage("✅ Đã thêm thành công!");
```

---

# ✅ Thử thách 3 — Focus lại input

```jsx
const inputRef = useRef(null);
```

```jsx
inputRef.current.focus();
```
# 📝 Bài 6.3 — DELETE (Thử thách)

## ✅ Thử thách 1 — Hiển thị "Đã xóa [tên]"

```jsx
setMessage(`✅ Đã xóa ${itemToDelete.name}`);
```

---

# ✅ Thử thách 2 — Hoàn tác trong 5 giây

```jsx
setTimeout(() => {

    setDeletedItem(null);

}, 5000);
```

```jsx
<button onClick={handleUndo}>

    ↩️ Hoàn tác

</button>
```

---

# ✅ Thử thách 3 — Confirm trước khi xóa

```jsx
const confirmDelete = window.confirm(

    "Bạn có chắc muốn xóa?"

);

if (!confirmDelete) return;
```
# 📝 Bài 6.4 — UPDATE (Thử thách)

## ✅ Thử thách 1 — Highlight ô input khi sửa

```jsx
style={{

    border: "2px solid #3498db",

    background: "#ecf5ff"

}}
```

---

# ✅ Thử thách 2 — Không cho lưu nếu tên trống

```jsx
if (editName.trim() === "") {

    alert("Tên không được để trống!");

    return;

}
```

---

# ✅ Thử thách 3 — Hiển thị "Đã lưu!"

```jsx
const [message, setMessage] = useState("");
```

```jsx
setMessage("✅ Đã lưu!");
```

```jsx
{
    message && (

        <p style={{ color: "green" }}>

            {message}

        </p>

    )
}
```
