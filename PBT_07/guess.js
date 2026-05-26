// guess.js

// =========================
// CÂU CHÀO
// =========================

alert(
    "🎯 Chào mừng bạn đến với Mini Game Đoán Số!\n\n" +
    "Luật chơi:\n" +
    "- Máy sẽ random 1 số từ 1 → 100\n" +
    "- Bạn có tối đa 7 lượt đoán\n" +
    "- Máy sẽ gợi ý Cao hơn hoặc Thấp hơn\n\n" +
    "Chúc bạn may mắn 😄"
);

// =========================
// RANDOM SỐ TỪ 1 → 100
// =========================

const soBiMat = Math.floor(Math.random() * 100) + 1;

// =========================
// BIẾN GAME
// =========================

let soLanDoan = 0;

const toiDaLuot = 7;

let cacSoDaDoan = [];

// =========================
// GAME LOOP
// =========================

while (soLanDoan < toiDaLuot) {

    let duDoan = prompt(
        `🎮 Nhập số từ 1 đến 100\nLượt còn lại: ${toiDaLuot - soLanDoan}`
    );

    // Nếu user bấm Cancel
    if (duDoan === null) {

        alert("👋 Bạn đã thoát game!");

        break;
    }

    // Chuyển sang number
    let soNguoiChoi = Number(duDoan);

    // =========================
    // VALIDATE INPUT
    // =========================

    if (
        isNaN(soNguoiChoi) ||
        soNguoiChoi < 1 ||
        soNguoiChoi > 100 ||
        !Number.isInteger(soNguoiChoi)
    ) {

        alert("⚠️ Vui lòng nhập số nguyên từ 1 đến 100!");

        continue;
    }

    // =========================
    // KIỂM TRA TRÙNG SỐ
    // =========================

    if (cacSoDaDoan.includes(soNguoiChoi)) {

        alert("⚠️ Bạn đã đoán số này rồi!");

        continue;
    }

    // Lưu số đã đoán
    cacSoDaDoan.push(soNguoiChoi);

    // Tăng số lần đoán
    soLanDoan++;

    // =========================
    // KIỂM TRA KẾT QUẢ
    // =========================

    if (soNguoiChoi === soBiMat) {

        alert(
            `🎉 Chính xác!\nBạn đoán đúng sau ${soLanDoan} lần!`
        );

        break;
    }
    else if (soNguoiChoi < soBiMat) {

        alert("⬆️ Cao hơn!");
    }
    else {

        alert("⬇️ Thấp hơn!");
    }

    // =========================
    // HẾT LƯỢT
    // =========================

    if (soLanDoan === toiDaLuot) {

        alert(
            `💀 Bạn đã hết lượt!\nĐáp án đúng là: ${soBiMat}`
        );
    }
}