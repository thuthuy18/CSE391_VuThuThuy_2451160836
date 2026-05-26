// student_data.js

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// =========================
// BIẾN THỐNG KÊ
// =========================

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let highestStudent = null;
let lowestStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Bonus
let maleTotal = 0;
let femaleTotal = 0;

let maleCount = 0;
let femaleCount = 0;

// =========================
// HEADER
// =========================

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

// =========================
// XỬ LÝ DỮ LIỆU
// =========================

for (let i = 0; i < students.length; i++) {

    let student = students[i];

    // Tính điểm trung bình
    let avg =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    avg = Number(avg.toFixed(1));

    // Xếp loại
    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }

    // Lưu điểm TB vào object
    student.avg = avg;
    student.rank = rank;

    // In bảng
    console.log(
        `| ${i + 1}   | ${student.name} | ${avg} | ${rank} |`
    );

    // Tìm cao nhất
    if (highestStudent === null || avg > highestStudent.avg) {
        highestStudent = student;
    }

    // Tìm thấp nhất
    if (lowestStudent === null || avg < lowestStudent.avg) {
        lowestStudent = student;
    }

    // Tổng điểm từng môn
    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    // Bonus: theo giới tính
    if (student.gender === "M") {
        maleTotal += avg;
        maleCount++;
    }
    else if (student.gender === "F") {
        femaleTotal += avg;
        femaleCount++;
    }
}

// =========================
// THỐNG KÊ XẾP LOẠI
// =========================

console.log("\n===== THỐNG KÊ XẾP LOẠI =====");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

// =========================
// CAO NHẤT & THẤP NHẤT
// =========================

console.log("\n===== SINH VIÊN CAO NHẤT =====");

console.log(
    `${highestStudent.name} - ${highestStudent.avg} điểm`
);

console.log("\n===== SINH VIÊN THẤP NHẤT =====");

console.log(
    `${lowestStudent.name} - ${lowestStudent.avg} điểm`
);

// =========================
// ĐIỂM TB TOÀN LỚP
// =========================

let avgMath = (totalMath / students.length).toFixed(1);
let avgPhysics = (totalPhysics / students.length).toFixed(1);
let avgCS = (totalCS / students.length).toFixed(1);

console.log("\n===== ĐIỂM TB TOÀN LỚP =====");

console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

// =========================
// BONUS: TB THEO GIỚI TÍNH
// =========================

let maleAvg = (maleTotal / maleCount).toFixed(1);
let femaleAvg = (femaleTotal / femaleCount).toFixed(1);

console.log("\n===== ĐIỂM TB THEO GIỚI TÍNH =====");

console.log("Nam:", maleAvg);
console.log("Nữ:", femaleAvg);