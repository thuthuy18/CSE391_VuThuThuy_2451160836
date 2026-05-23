// HEADER
const appTitle = document.querySelector(".app-header h1");

// BUTTON
const openModalBtn = document.getElementById("openTaskModal");

const closeModalBtn = document.getElementById("closeModal");

// MODAL
const taskModal = document.getElementById("taskModal");

// MESSAGE
const messageBox = document.getElementById("messageBox");

// FORM
const taskForm = document.getElementById("taskForm");

// =========================
// THAY ĐỔI DOM
// =========================

appTitle.textContent = "Ứng dụng quản lý công việc";

openModalBtn.textContent = "+ Tạo công việc mới";

messageBox.textContent = "Chào mừng bạn đến với ứng dụng!";


// =========================
// MỞ POPUP
// =========================

openModalBtn.addEventListener("click", function(){

    taskModal.style.display = "flex";

});

// =========================
// ĐÓNG POPUP
// =========================

closeModalBtn.addEventListener("click", function(){

    taskModal.style.display = "none";

});
