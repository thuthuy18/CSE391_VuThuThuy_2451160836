const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("btnClose");
const modal = document.getElementById("studentFormModal");
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const message = document.getElementById("message");
const totalStudents = document.getElementById("totalStudents");
const averageScore = document.getElementById("averageScore");

// Mở modal
openModalBtn.addEventListener("click", function(){
    modal.classList.remove("hidden"); // hiển thị modal
});

// Đóng modal
closeModalBtn.addEventListener("click", function(){
    modal.classList.add("hidden"); // ẩn modal
});