## PHẦN A 

---

### Câu A1  — Function Declaration vs Expression vs Arrow

Viết hàm `tinhThueBaoHiem(luong)` theo 3 cách sau :

```javascript
/* =========================
   CÁCH 1: FUNCTION DECLARATION
========================= */

function tinhThueBaoHiem_Declaration(luong){

    let thue = 0;

    if(luong > 11000000){
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}



/* =========================
   CÁCH 2: FUNCTION EXPRESSION
========================= */

const tinhThueBaoHiem_Expression = function(luong){

    let thue = 0;

    if(luong > 11000000){
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};



/* =========================
   CÁCH 3: ARROW FUNCTION
========================= */

const tinhThueBaoHiem_Arrow = (luong) => {

    let thue = 0;

    if(luong > 11000000){
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

```
**Kiểm tra nhanh:**
```javascript
console.log(tinhThueBaoHiem(15_000_000));
// → { thue: 1500000, thuc_nhan: 13500000 }

console.log(tinhThueBaoHiem(10_000_000));
// → { thue: 0, thuc_nhan: 10000000 }
```

---

### Hoisting — Ba cách có khác nhau không?

Ba cách viết có khác nhau:

| Kiểu khai báo hàm    | Hoisting               | Gọi trước khai báo| Giải thích                                                                     |
| -------------------- | -----------------------| ------------------| ------------------------------------------------------------------------------ |
| Function Declaration | Có hoisting hoàn chỉnh | Được              | Toàn bộ hàm được đưa lên bộ nhớ trước khi chạy chương trình                    |
| Function Expression  | Không hoisting hàm     | Không được        | Chỉ biến được hoisting, hàm chưa được gán giá trị                              |
| Arrow Function       | Không hoisting hàm     | Không được        | Hoạt động giống Function Expression, thường bị TDZ khi dùng `const` hoặc `let` |

- Ví dụ cụ thể:
```javascript
// ✅ Function Declaration: GỌI TRƯỚC khai báo → hoạt động bình thường
console.log(khaiBao(5)); // → { thue: 0, thuc_nhan: 5000000 }

function khaiBao(luong) {
    const thue = luong > 11_000_000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
}
```

```javascript
// ❌ Function Expression với const: GỌI TRƯỚC → ReferenceError (Temporal Dead Zone)
console.log(bieuThuc(5)); // 💥 ReferenceError: Cannot access 'bieuThuc' before initialization

const bieuThuc = function(luong) {
    const thue = luong > 11_000_000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```

```javascript
// ❌ Arrow Function với const: tương tự Function Expression → ReferenceError
console.log(arrow(5)); // 💥 ReferenceError: Cannot access 'arrow' before initialization

const arrow = (luong) => {
    const thue = luong > 11_000_000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```

**Tóm lại:** Chỉ **Function Declaration** mới được hoisting hoàn toàn. Function Expression và Arrow Function bị ràng buộc bởi **Temporal Dead Zone** (TDZ) khi dùng `const`/`let` → không thể gọi trước khai báo.

---

## Câu A2 — Scope & Closure 

### Đoạn 1 — Dự đoán output

```javascript
const c = counter();
console.log(c.increment());  // → 1
console.log(c.increment());  // → 2
console.log(c.increment());  // → 3
console.log(c.decrement());  // → 2
console.log(c.getCount());   // → 2
```
Giải thích:
- Biến count nằm trong scope của hàm counter().
- Các hàm:`increment`, `decrement`, `getCount` đều tạo ra `closure`, nên vẫn nhớ và truy cập được biến `count` ngay cả khi `counter()` đã chạy xong.

Quá trình hoạt động:
- Ban đầu `count` = 0
- `increment()` lần 1 → tăng lên 1
- `increment()` lần 2 → tăng lên 2
- `increment()` lần 3 → tăng lên 3
- `decrement()` → giảm còn 2
- `getCount()` → trả về 2

### Đoạn 2 — Dự đoán output

```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

> **Lưu ý thứ tự:** Ba dòng `var` chạy trước (timeout 100ms), ba dòng `let` chạy sau (timeout 200ms).

---

### Giải thích chi tiết `var` vs `let` trong vòng lặp `setTimeout`

**Trường hợp `var`:**

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
```

- `var` có **function scope** (hoặc global scope), không có block scope.
- Vòng lặp chạy xong, `i` đã tăng thành **3** và thoát điều kiện.
- Cả ba callback của `setTimeout` đều trỏ về **cùng một biến `i`** duy nhất trong bộ nhớ.
- Khi 100ms trôi qua, callback chạy → đọc `i` → lúc này `i = 3` → in ra `3` ba lần.

**Minh hoạ bộ nhớ:**
```
[bộ nhớ global/function]
  i = 0 → 1 → 2 → 3  (biến duy nhất)
  callback1 → tham chiếu đến i
  callback2 → tham chiếu đến i
  callback3 → tham chiếu đến i
→ Khi chạy: cả 3 đọc i = 3
```

---

**Trường hợp `let`:**

```javascript
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

- `let` có **block scope** — mỗi lần lặp tạo ra một **binding `j` riêng biệt**.
- Mỗi callback "đóng lại" (closure) trên **bản sao `j` của chính vòng lặp đó**.
- Khi 200ms trôi qua, callback 0 đọc `j = 0`, callback 1 đọc `j = 1`, callback 2 đọc `j = 2`.

**Minh hoạ bộ nhớ:**
```
[vòng lặp 1] j_0 = 0 → callback1 closure giữ j_0
[vòng lặp 2] j_1 = 1 → callback2 closure giữ j_1
[vòng lặp 3] j_2 = 2 → callback3 closure giữ j_2
→ Khi chạy: mỗi callback đọc j riêng → 0, 1, 2
```

**Cách fix `var` nếu muốn kết quả 0, 1, 2:**
```javascript
// Cách 1: Dùng let thay var
// Cách 2: Dùng IIFE để tạo scope mới
for (var i = 0; i < 3; i++) {
    ((capturedI) => {
        setTimeout(() => console.log("var:", capturedI), 100);
    })(i);
}
// → var: 0, var: 1, var: 2
```

---

## Câu A3 — Array Methods

```JavaScript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const soChan = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const nhanBa = nums.map(n => n * 3);

// 3. Tính tổng tất cả
const tong = nums.reduce((sum, n) => sum + n, 0);

// 4. Tìm số đầu tiên > 7
const lonHon7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const coSoLonHon10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const tatCaLonHon0 = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const chanLe = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

// 8. Đảo ngược mảng (không mutate gốc)
const daoNguoc = [...nums].reverse();

```
## Câu A4  — Object Destructuring & Spread

Kết quả dự doán output là: 

```JavaScript
iPhone 16 25990000 8 Titan
ReferenceError

23990000
true
25990000

16

```
Giải thích:
1. Object Destructuring

```JavaScript
const { name, price, specs: { ram, color } } = product;
```

Dòng này lấy dữ liệu từ object:

- `name` → `"iPhone 16"`
- `price` → 25990000
- `ram` → `8`
- `color` → `"Titan"`

nên:

```JavaScript
console.log(name, price, ram, color); //in ra: iPhone 16 25990000 8 Titan
```


2. Vì sao `console.log(specs)` lỗi?

- Trong destructuring:

```Javascript 

specs: { ram, color }

```

ta chỉ lấy: `ram`, `color` ra từ `object specs`.

- Biến `specs` KHÔNG được tạo riêng nên:

```JavaScript
console.log(specs); #sẽ báo: ReferenceError#
````


3. Spread Operator

```JavaScript
const updated = { ...product, price: 23990000, sale: true };
```

- Spread sẽ: copy toàn bộ object `product`sau đó ghi đè `price` cuối cùng thêm `sale`

nên:
```JavaScript
updated.price //→ 23990000 

updated.sale // → true
```


4. Object gốc có đổi không?

```JavaScript
console.log(product.price); //→ vẫn là:25990000

```
- Vì spread tạo object mới nên object gốc không bị đổi.

5. Spread Gotcha (Shallow Copy)

```JavaScript
const copy = { ...product };
```
- Spread chỉ copy tầng đầu tiên (shallow copy).

- Object bên trong:

`specs`: vẫn dùng chung reference.

- Khi:

```JavaScript
copy.specs.ram = 16;

```

thì product.specs.ram cũng đổi theo.

nên:

```JavaScript
console.log(product.specs.ram); //in ra:16
```
