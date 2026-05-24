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
// TASK LIST
// =========================

const taskList = document.getElementById("taskList");

// =========================
// SUMMARY
// =========================

const modalTitle = document.getElementById("modalTitle");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");

// =========================
// FORM INPUTS
// =========================

const taskTitle = document.getElementById("taskTitle");

const taskDescription = document.getElementById("taskDescription");

const taskDeadline = document.getElementById("taskDeadline");

const taskPriority = document.getElementById("taskPriority");

const taskCompleted = document.getElementById("taskCompleted");

// =========================
// TASK DATA
// =========================

let tasks = [];

// =========================
// EDIT MODE
// =========================

let editTaskId = null;


// =========================
// THAY ĐỔI DOM
// =========================

appTitle.textContent = "Ứng dụng quản lý công việc";

openModalBtn.textContent = "+ Tạo công việc mới";

messageBox.textContent = "Chào mừng bạn đến với ứng dụng!";

// =========================
// SAVE LOCAL STORAGE
// =========================

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

// =========================
// LOAD LOCAL STORAGE
// =========================

function loadTasks(){

    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks){

        tasks = JSON.parse(savedTasks);

    }

}

// =========================
// UPDATE SUMMARY
// =========================

function updateTaskSummary(){

    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(function(task){

        return task.completed;

    });

    completedTasks.textContent = completed.length;

    pendingTasks.textContent =
        tasks.length - completed.length;

}


// =========================
// MỞ POPUP
// =========================

openModalBtn.addEventListener("click", function(){

    taskForm.reset();

    editTaskId = null;

    modalTitle.textContent = "Thêm công việc";

    taskModal.style.display = "flex";

});

// =========================
// ĐÓNG POPUP
// =========================

closeModalBtn.addEventListener("click", function(){

    taskModal.style.display = "none";

});

// =========================
// SUBMIT FORM
// =========================

taskForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Create task object
    const taskData = {

        id: editTaskId || Date.now(),

        title: taskTitle.value,

        description: taskDescription.value,

        deadline: taskDeadline.value,

        priority: taskPriority.value,

        completed: taskCompleted.checked

    };

    // =========================
    // UPDATE TASK
    // =========================

    if(editTaskId){

        tasks = tasks.map(function(task){

            if(task.id === editTaskId){

                return taskData;

            }

            return task;

        });

        showMessage("Cập nhật công việc thành công!");

    }

    // =========================
    // ADD TASK
    // =========================

    else{

        tasks.push(taskData);

        showMessage("Thêm công việc thành công!");

    }

    // Render task
    renderTasks();

    // Reset form
    taskForm.reset();

    // Close modal
    taskModal.style.display = "none";

    // Reset edit mode
    editTaskId = null;

});

// =========================
// RENDER TASKS
// =========================

function renderTasks(){

    // Empty task
    if(tasks.length === 0){

        taskList.innerHTML = `
        
            <p class="empty-message">
                Chưa có công việc nào.
            </p>

        `;

        // UPDATE SUMMARY
        updateTaskSummary();

        // SAVE STORAGE
        saveTasks();

        return;

    }

    // Reset html
    taskList.innerHTML = "";

    // Loop tasks
    tasks.forEach(function(task){

        const taskCard = `

            <div class="task-card ${task.completed ? 'completed' : ''}">

                <h3>${task.title}</h3>

                <p>${task.description}</p>

                <p>
                    📅 Hạn: ${task.deadline}
                </p>

                <p>
                    ⭐ Ưu tiên: ${
                    task.priority === "high"
                    ? "Cao"
                    : task.priority === "medium"
                    ? "Trung bình"
                    : "Thấp"
                }
                </p>

                <p>
                    ${
                        task.completed
                        ? "✅ Đã hoàn thành"
                        : "❌ Chưa hoàn thành"
                    }
                </p>

                <div class="task-actions">

                    <button 
                        class="complete-btn"
                        onclick="toggleTask(${task.id})"
                    >
                        Hoàn thành
                    </button>

                    <button 
                        class="edit-btn"
                        onclick="editTask(${task.id})"
                    >
                        Sửa
                    </button>

                    <button 
                        class="delete-btn"
                        onclick="deleteTask(${task.id})"
                    >
                        Xóa
                    </button>

                </div>

            </div>

        `;

        taskList.innerHTML += taskCard;

    });

    // =========================
    // UPDATE SUMMARY
    // =========================

    updateTaskSummary();

    // =========================
    // SAVE STORAGE
    // =========================

    saveTasks();

}

// =========================
// DELETE TASK
// =========================

function deleteTask(id){

    const isConfirm = confirm(
        "Bạn có chắc muốn xóa công việc này không?"
    );

    if(!isConfirm){

        return;

    }

    tasks = tasks.filter(function(task){

        return task.id !== id;

    });

    renderTasks();

    showMessage("Xóa công việc thành công!");

}

// =========================
// EDIT TASK
// =========================

function editTask(id){

    const task = tasks.find(function(task){

        return task.id === id;

    });

    // Put old data into form
    taskTitle.value = task.title;

    taskDescription.value = task.description;

    taskDeadline.value = task.deadline;

    taskPriority.value = task.priority;

    taskCompleted.checked = task.completed;

    // Save edit id
    editTaskId = id;

    // Change title
    modalTitle.textContent = "Cập nhật công việc";

    // Show modal
    taskModal.style.display = "flex";

}

// =========================
// TOGGLE COMPLETE
// =========================

function toggleTask(id){

    tasks = tasks.map(function(task){

        if(task.id === id){

            return {

                ...task,

                completed: !task.completed

            };

        }

        return task;

    });

    renderTasks();
    
    showMessage("Cập nhật trạng thái thành công!");

}

// =========================
// SHOW MESSAGE
// =========================

function showMessage(message){

    messageBox.style.display = "block";

    messageBox.textContent = message;

    setTimeout(function(){

        messageBox.style.display = "none";

    }, 3000);

}

// =========================
// START APP
// =========================

loadTasks();

renderTasks();