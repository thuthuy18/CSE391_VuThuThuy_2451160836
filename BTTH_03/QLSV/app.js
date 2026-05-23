const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("btnClose");

const modal = document.getElementById("studentFormModal");

const studentForm = document.getElementById("studentForm");

const studentList = document.getElementById("studentList");

const message = document.getElementById("message");

const formTitle = document.getElementById("formTitle");

/* =========================
   MẢNG DỮ LIỆU
========================= */

let students = [];

/* =========================
   LOAD LOCALSTORAGE
========================= */

const savedStudents =
    localStorage.getItem("students");

if(savedStudents){

    students = JSON.parse(savedStudents);

    renderStudents();

}

/* =========================
   MỞ MODAL
========================= */

openModalBtn.addEventListener("click", function(){

    modal.classList.remove("hidden");

    formTitle.textContent = "Thêm sinh viên";

    studentForm.reset();

    delete studentForm.dataset.editIndex;

});

/* =========================
   ĐÓNG MODAL
========================= */

closeModalBtn.addEventListener("click", function(){

    modal.classList.add("hidden");

});

/* =========================
   SUBMIT FORM
========================= */

studentForm.addEventListener("submit", function(event){

    event.preventDefault();

    const id = document.getElementById("studentId").value;

    const name = document.getElementById("studentName").value;

    const dob = document.getElementById("studentDob").value;

    const studentClass = document.getElementById("studentClass").value;

    const score = document.getElementById("studentScore").value;

    const email = document.getElementById("studentEmail").value;

    const student = {

        id: id,

        name: name,

        dob: dob,

        studentClass: studentClass,

        score: score,

        email: email

    };

    /* =========================
       KIỂM TRA ĐANG SỬA
    ========================= */

    if(studentForm.dataset.editIndex !== undefined){

        const index = studentForm.dataset.editIndex;

        students[index] = student;

        delete studentForm.dataset.editIndex;

        message.textContent =
            "Cập nhật sinh viên thành công!";

    }

    else{

        students.push(student);

        showMessage(
            "Thêm sinh viên thành công!"
        );

    }

    /* =========================
       LƯU LOCALSTORAGE
    ========================= */

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    renderStudents();

    modal.classList.add("hidden");

    studentForm.reset();

});

/* =========================
   HIỂN THỊ DỮ LIỆU
========================= */

function renderStudents(){

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.dob}</td>

            <td>${student.studentClass}</td>

            <td>${student.score}</td>

            <td>${student.email}</td>

            <td>

                <button 
                    class="editBtn"
                    data-index="${index}"
                >
                    Sửa
                </button>

                <button 
                    class="deleteBtn"
                    data-index="${index}"
                >
                    Xóa
                </button>

            </td>

        `;

        studentList.appendChild(tr);

    });

    updateStatistics();

}

/* =========================
   XỬ LÝ SỬA / XÓA
========================= */

studentList.addEventListener("click", function(e){

    /* =========================
       XÓA
    ========================= */

    if(e.target.classList.contains("deleteBtn")){

        const index = e.target.dataset.index;

        if(confirm("Bạn có chắc muốn xóa không?")){

            students.splice(index, 1);

            localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

            renderStudents();

            showMessage(
                "Xóa sinh viên thành công!"
            );

        }

    }

    /* =========================
       SỬA
    ========================= */

    if(e.target.classList.contains("editBtn")){

        const index = e.target.dataset.index;

        const student = students[index];

        document.getElementById("studentId").value =
            student.id;

        document.getElementById("studentName").value =
            student.name;

        document.getElementById("studentDob").value =
            student.dob;

        document.getElementById("studentClass").value =
            student.studentClass;

        document.getElementById("studentScore").value =
            student.score;

        document.getElementById("studentEmail").value =
            student.email;

        studentForm.dataset.editIndex = index;

        formTitle.textContent =
            "Cập nhật sinh viên";

        modal.classList.remove("hidden");

    }

});

/* =========================
   HIỂN THỊ THÔNG BÁO
========================= */

function showMessage(text){

    message.textContent = text;

    setTimeout(function(){

        message.textContent = "";

    }, 3000);

}

/* =========================
   THỐNG KÊ
========================= */

function updateStatistics(){

    totalStudents.textContent =
        students.length;

    if(students.length === 0){

        averageScore.textContent = 0;

        return;

    }

    const totalScore =
        students.reduce(

            (sum, student) =>

                sum + parseFloat(student.score),

            0

        );

    averageScore.textContent = (

        totalScore / students.length

    ).toFixed(2);

}