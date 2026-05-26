// fizzbuzz.js

// =========================
// VERSION 1: CLASSIC
// =========================

console.log("===== CLASSIC FIZZBUZZ =====");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {

        console.log("Fizz");
    }
    else if (i % 5 === 0) {

        console.log("Buzz");
    }
    else {

        console.log(i);
    }
}

// =========================
// VERSION 2: CUSTOM
// =========================

function customFizzBuzz(n, rules) {

    console.log("\n===== CUSTOM FIZZBUZZ =====");

    for (let i = 1; i <= n; i++) {

        let result = "";

        // Kiểm tra tất cả rules
        for (let j = 0; j < rules.length; j++) {

            if (i % rules[j].divisor === 0) {

                result += rules[j].word;
            }
        }

        // Nếu không khớp rule nào
        if (result === "") {

            console.log(i);
        }
        else {

            console.log(`${i} = "${result}"`);
        }
    }
}

// =========================
// TEST
// =========================

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

// Kiểm tra các số đặc biệt đề yêu cầu
console.log("\n=== Kiểm tra số đặc biệt ===");
var rules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

var soKiemTra = [21, 15, 35, 105];
for (var i = 0; i < soKiemTra.length; i++) {
    var so = soKiemTra[i];
    var ketQua = "";
    for (var j = 0; j < rules.length; j++) {
        if (so % rules[j].divisor === 0) {
            ketQua += rules[j].word;
        }
    }
    console.log(so + " → " + ketQua);
}

/*
Ví dụ output:

3 = "Fizz"
5 = "Buzz"
7 = "Jazz"
15 = "FizzBuzz"
21 = "FizzJazz"
35 = "BuzzJazz"
*/