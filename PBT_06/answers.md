### PHẦN A 
---
#### Câu A1 — Grid System

## HTML

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```
---

## Phân tích Layout

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 12/12 | 6/12 | 3/12 |
| Box layout | Mỗi box chiếm toàn bộ hàng | 2 box / 1 hàng | 4 box / 1 hàng |

---

## Minh họa Layout

## 1. Mobile (<768px)

Mỗi box chiếm toàn bộ chiều ngang:

```text
[ Box 1 ]
[ Box 2 ]
[ Box 3 ]
[ Box 4 ]
```
- `col-12` 
- 1 box mỗi hàng

---

## 2. Tablet (768px - 991px)

Mỗi box chiếm 6/12 cột:

```text
[ Box 1 ] [ Box 2 ]
[ Box 3 ] [ Box 4 ]
```

- `col-md-6`
- Bootstrap grid có 12 cột
- 6/12 = 50%
- 2 box mỗi hàng

---

## 3. Desktop (≥992px)

Mỗi box chiếm 3/12 cột:

```text
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ]
```

- `col-lg-3`
- 3/12 = 25%
- 4 box trên cùng 1 hàng

---

# Câu hỏi thêm

## `col-md-6` nghĩa là gì?

```html
class="col-md-6"
```

### Ý nghĩa
- Khi màn hình đạt kích thước md trở lên (≥ 768px)
- Box sẽ chiếm 6/12 cột
- Tức là chiếm 50% chiều ngang

Vì: 12 / 6 = 2

=> 2 box trên 1 hàng.

---

## Tại sao không cần viết `col-sm-12`?

Vì:

```html
col-12
```

đã áp dụng cho tất cả kích thước mặc định, bao gồm:
- mobile
- small devices

Bootstrap sử dụng Mobile-First:
- CSS nhỏ áp dụng trước
- Breakpoint lớn sẽ override sau

Nên:

```html
col-12
```

đã tương đương:

```html
col-sm-12
```

trong trường hợp này.

---

# Câu A2 — Utilities & Components

---

# 1. Giải thích `d-none d-md-block`

```html
<div class="d-none d-md-block">
```

## Ý nghĩa
| Class        | Ý nghĩa                                            |
| ------------ | -------------------------------------------------- |
| `d-none`     | Ẩn element (`display: none`)                       |
| `d-md-block` | Từ màn hình `md` trở lên thì hiển thị dạng `block` |

```css
display: block;
```

---

## Kết quả

| Kích thước | Hiển thị |
|---|---|
| Mobile (<768px) | ❌ Ẩn |
| Tablet/Desktop (>=768px) | ✅ Hiện |

---

# 2. 5 Spacing Utilities

## `mt-3`

```html
<div class="mt-3">
```

- `m` = margin
- `t` = top

→ Thêm margin phía trên.

---

## `mb-4`

```html
<div class="mb-4">
```

→ Thêm margin phía dưới.

---

## `px-4`

```html
<div class="px-4">
```

- `p` = padding
- `x` = left + right

→ Thêm padding trái và phải.

---

## `py-2`

```html
<div class="py-2">
```

→ Thêm padding trên và dưới.

---

## `ms-auto`

```html
<div class="ms-auto">
```

→ `margin-left: auto`

→ Đẩy element sang phải trong flexbox.

---

# 3. Khác nhau giữa `.container`, `.container-fluid`, `.container-md`

| Class | Ý nghĩa |
|---|---|
| `.container` | Có max-width theo từng breakpoint |
| `.container-fluid` | Chiếm 100% chiều ngang mọi màn hình |
| `.container-md` | Full width ở mobile, có max-width từ md trở lên |

---

# Ví dụ

## `.container`

```html
<div class="container">
```

- Có khoảng trắng hai bên
- Không full màn hình
```
|    CONTENT    |
```
---

## `.container-fluid`

```html
<div class="container-fluid">
```

- Luôn full width
```
|CONTENT FULL WIDTH|
```

---

## `.container-md`

```html
<div class="container-md">
```

- Mobile: full width
- Từ `md` `(≥768px)`: fixed width giống `.container`



