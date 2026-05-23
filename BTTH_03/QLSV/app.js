const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("btnClose");
const modal = document.getElementById("studentFormModal");
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const message = document.getElementById("message");
const totalStudents = document.getElementById("totalStudents");
const averageScore = document.getElementById("averageScore");
/* =========================
   MẢNG DỮ LIỆU
========================= */

let students = [];

/* =========================
   MỞ MODAL
========================= */
openModalBtn.addEventListener("click", function(){
    modal.classList.remove("hidden"); // hiển thị modal
});

/* =========================
   ĐÓNG MODAL
========================= */
closeModalBtn.addEventListener("click", function(){
    modal.classList.add("hidden"); // ẩn modal
});

studentForm.addEventListener("submit", function(event){

    event.preventDefault();

    /* =========================
       LẤY DỮ LIỆU INPUT
    ========================= */
    const id = document.getElementById("studentId").value;

    const name = document.getElementById("studentName").value;

    const dob = document.getElementById("studentDob").value;

    const studentClass = document.getElementById("studentClass").value;

    const score = document.getElementById("studentScore").value;

    const email = document.getElementById("studentEmail").value;

    /* =========================
       TẠO OBJECT SINH VIÊN
    ========================= */

    const student = {

        id: id,

        name: name,

        dob: dob,

        studentClass: studentClass,

        score: score,

        email: email

    };
    students.push(student);
    renderStudents();
    console.log(students);
    console.log(id);
    console.log(name);
    console.log("Đã submit form");

});

function renderStudents(){

    studentList.innerHTML = "";

    students.forEach(function(student){

        const row = `
        
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.dob}</td>

                <td>${student.studentClass}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button>Sửa</button>

                    <button>Xóa</button>

                </td>

            </tr>

        `;

        studentList.innerHTML += row;

    });

    students.push(student);

    renderStudents();

    modal.classList.add("hidden");

    studentForm.reset();

}


