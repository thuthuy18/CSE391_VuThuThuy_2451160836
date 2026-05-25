---

## PHẦN A 

### Câu A1 — var / let / const

## Phân tích var, let, const

**Đoạn 1:**
```javascript
console.log(x); // undefined
var x = 5;
```
Dự đoán: `undefined`

Giải thích :

`var` bị hoisting.

JavaScript hiểu như:

```javascript
var x;
console.log(x);
x = 5;
```

- Biến được khai báo trước nhưng chưa gán giá trị nên là `undefined`.

**Đoạn 2:**
```javascript
console.log(y); // ReferenceError
let y = 10;
```
Dự đoán: `ReferenceError: Cannot access 'y' before initialization`

Giải thích:
`let` cũng hoisting nhưng nằm trong:

```
Temporal Dead Zone (TDZ)
```

- Không được truy cập trước khi khai báo.

**Đoạn 3:**
```javascript
const z = 15;
z = 20; // TypeError
console.log(z);
```
Dự đoán: `TypeError: Assignment to constant variable`

Giải thích:

`const` không thể gán lại giá trị.

**Đoạn 4:**
```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```
Dự đoán: `[1, 2, 3, 4]`

Giải thích:

`const` không cho gán lại biến:
```javascript
arr = []
```

- Nhưng vẫn cho phép thay đổi nội dung object/array.

**Đoạn 5:**
```javascript
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a); // 2
}
console.log("Ngoài block:", a); // 1
```
Dự đoán: `Trong block: 2` rồi `Ngoài block: 1`

Giải thích:

`let `có:

```javascript
Block Scope

Biến bên trong block `{}` là biến khác hoàn toàn.

File `var_let_const.js`

```javascript
// Đoạn 1

console.log(x);

var x = 5;


// Đoạn 2

console.log(y);

let y = 10;


// Đoạn 3

const z = 15;

z = 20;

console.log(z);


// Đoạn 4

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);


// Đoạn 5

let a = 1;

{
    let a = 2;

    console.log("Trong block:", a);
}
```

| Trường hợp                        | Giải thích         |
| --------------------------------- | ------------------ |
| `var` ra `undefined`              | Do hoisting        |
| `let` bị lỗi                      | Vì TDZ             |
| `const` array vẫn sửa được        | Chỉ khóa reference |
| `let` trong block khác biến ngoài | Vì block scope     |
