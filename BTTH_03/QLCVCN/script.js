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


taskForm.addEventListener("submit", function(event){

    event.preventDefault();

    const newTask = {

        id: Date.now(),

        title: taskTitle.value,

        description: taskDescription.value,

        deadline: taskDeadline.value,

        priority: taskPriority.value,

        completed: taskCompleted.checked

    };

    tasks.push(newTask);

    renderTasks();

    messageBox.style.display = "block";

    messageBox.textContent = "Thêm công việc thành công!";

    taskForm.reset();

    taskModal.style.display = "none";

});