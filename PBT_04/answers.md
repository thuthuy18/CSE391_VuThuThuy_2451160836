## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 - 5 Loại Positioning

| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                        | Cuộn theo trang?                        | Use case                                  |
| ---------- | ------------------------- | ---------------------------------------- | --------------------------------------- | ----------------------------------------- |
| `static`   | Có                        | Không có tham chiếu, theo thứ tự tài liệu| Có                                      | Mặc định theo layout của trang            |
| `relative` | Có                        | So với vị trí gốc của chính nó           | Có                                      | Dịch chuyển nhẹ, làm mốc cho absolute con |
| `absolute` | Không                     | Thẻ cha gần nhất có position khác static | Có (cuộn cùng cha)                      | Badge trên icon, dropdown, tooltip        |
| `fixed`    | Không                     | Cửa sổ trình duyệt                       | Không — luôn dính tại chỗ               | Chat button, modal overlay                |
| `sticky`   | Có                        | Cửa sổ trình duyệt (sau khi đạt ngưỡng)  | Có → Không (dính khi scroll đến ngưỡng) | Header dính, cột dính trong bảng          |

- Khi nào absolute tham chiếu body?  
- Khi phần tử không có ancestor nào được định vị (relative, absolute, fixed, sticky). Lúc đó nó tham chiếu trực tiếp đến body (thực chất là viewport).

- Khi nào tham chiếu parent?  
- Khi parent (hoặc ancestor gần nhất) có position khác static. Đây chính là nearest positioned ancestor.

- Khái niệm "nearest positioned ancestor":  
- Là phần tử tổ tiên gần nhất có thuộc tính position được thiết lập (không phải static). Phần tử absolute sẽ căn chỉnh tọa độ dựa trên hộp chứa (containing block) của ancestor này. Nếu không có, nó mặc định căn theo viewport.

### Câu A2 (10đ) — Flexbox vs Grid

/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
/* 4 items → Bố cục = ??? */

```
┌───────────────────────────────────────────────┐
│  CONTAINER (100% width)                       │
│ ┌───────┬───────┬───────┬───────┐             │
│ │ Item1 │ Item2 │ Item3 │ Item4 │             │
│ │ 25%   │ 25%   │ 25%   │ 25%   │             │
│ └───────┴───────┴───────┴───────┘             │
└───────────────────────────────────────────────┘
```

Trường hợp 1 – Flex, 4 items, `flex:1`

- Các item chia đều chiều ngang container.
- Vì `flex:1` → mỗi item chiếm tỷ lệ bằng nhau.
- Kết quả: 1 hàng, 4 ô bằng nhau (25% mỗi ô).
→ Dùng khi muốn phân bố đều các phần tử.

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/* 6 items → Bố cục = ??? (mấy hàng, mấy cột?) */

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌─────────────┬─────────────┐                 │
│ │   Item1     │   Item2     │                 │
│ └─────────────┴─────────────┘                 │
│ ┌─────────────┬─────────────┐                 │
│ │   Item3     │   Item4     │                 │
│ └─────────────┴─────────────┘                 │
│ ┌─────────────┬─────────────┐                 │
│ │   Item5     │   Item6     │                 │
│ └─────────────┴─────────────┘                 │
└───────────────────────────────────────────────┘
```

Trường hợp 2 – `Flex-wrap`, 6 items, width:45% + margin:2.5%

- Mỗi item gần bằng nửa chiều ngang.
- `flex-wrap:` wrap cho phép xuống dòng.
- 6 items → 3 hàng, mỗi hàng 2 item.
→ Dùng để tạo layout dạng lưới đơn giản bằng flex.

/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
/* 3 items → Bố cục = ??? */

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ Item1             Item2             Item3     │
└───────────────────────────────────────────────┘
```

Trường hợp 3 – Flex, `justify-content: space-between`

- 3 item nằm trên cùng một hàng.
- Khoảng trống được phân bố đều giữa các item.
- `align-items:` center → căn giữa theo trục dọc.
→ Dùng cho thanh menu hoặc dàn đều nút bấm.

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/* 3 items → Bố cục = ??? */

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌───────┬───────────────┬───────┐             │
│ │ Item1 │     Item2     │ Item3 │             │
│ │200px  │     flexible  │200px  │             │
│ └───────┴───────────────┴───────┘             │
└───────────────────────────────────────────────┘
```

Trường hợp 4 – Grid, `200px 1fr 200px`

- Grid có 3 cột: trái 200px, giữa co giãn, phải 200px.
- 3 item lấp đầy 3 cột.
→ Dùng cho layout kiểu sidebar–content–sidebar.

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/* 7 items → Bố cục = ??? (mấy hàng? item cuối ở đâu?) */

```
┌───────────────────────────────────────────────┐
│  CONTAINER                                    │
│ ┌───────┬───────┬───────┐                     │
│ │ Item1 │ Item2 │ Item3 │                     │
│ └───────┴───────┴───────┘                     │
│ ┌───────┬───────┬───────┐                     │
│ │ Item4 │ Item5 │ Item6 │                     │
│ └───────┴───────┴───────┘                     │
│ ┌───────┐                                     │
│ │ Item7 │                                     │
│ └───────┘                                     │
└───────────────────────────────────────────────┘
```

Trường hợp 5 – Grid, `repeat(3,1fr)` với 7 items

- Grid có 3 cột bằng nhau.
- 7 items → 3 hàng:
- Hàng 1: 3 item
- Hàng 2: 3 item
- Hàng 3: còn lại 1 item ở cột đầu tiên
→ Dùng cho bố cục dạng lưới đều, item cuối lẻ nằm một mình.







