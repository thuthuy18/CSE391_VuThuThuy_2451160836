import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {

    // ===== STATE =====
    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const [filter, setFilter] = useState("all");

    // State sửa todo
    const [editingId, setEditingId] = useState(null);

    const [editText, setEditText] = useState("");

    // ===== LOAD LOCALSTORAGE =====
    useEffect(() => {

        const savedTodos =
            JSON.parse(localStorage.getItem("todos"));

        if (savedTodos) {
            setTodos(savedTodos);
        }

    }, []);

    // ===== SAVE LOCALSTORAGE =====
    useEffect(() => {

        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        );

    }, [todos]);

    // ===== PLACEHOLDER ĐỘNG =====
    let placeholderText = "Nhập công việc...";

    if (filter === "active") {
        placeholderText = "Thêm việc chưa hoàn thành...";
    }

    if (filter === "completed") {
        placeholderText = "Xem việc đã hoàn thành...";
    }

    // ===== THÊM TODO =====
    function addTodo() {

        if (inputValue.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false,
            createdAt: new Date().toLocaleString()
        };

        setTodos([...todos, newTodo]);

        setInputValue("");
    }

    // ===== ENTER =====
    function handleKeyPress(event) {

        if (event.key === "Enter") {
            addTodo();
        }
    }

    // ===== TOGGLE =====
    function toggleTodo(id) {

        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        );
    }

    // ===== DELETE =====
    function deleteTodo(id) {

        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }

    // ===== BẮT ĐẦU SỬA =====
    function startEdit(todo) {

        setEditingId(todo.id);

        setEditText(todo.text);
    }

    // ===== LƯU SỬA =====
    function saveEdit(id) {

        if (editText.trim() === "") return;

        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, text: editText }
                    : todo
            )
        );

        setEditingId(null);

        setEditText("");
    }

    // ===== HỦY SỬA =====
    function cancelEdit() {

        setEditingId(null);

        setEditText("");
    }

    // ===== FILTER =====
    const filteredTodos = todos.filter(todo => {

        if (filter === "active") {
            return !todo.done;
        }

        if (filter === "completed") {
            return todo.done;
        }

        return true;
    });

    // ===== COUNT =====
    const activeCount =
        todos.filter(todo => !todo.done).length;

    const completedCount =
        todos.filter(todo => todo.done).length;

    const totalTodos = todos.length;

    return (
        <div style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial"
        }}>

            <h1 style={{ textAlign: "center" }}>
                📋 Todo App
            </h1>

            {/* INPUT */}
            <div style={{
                display: "flex",
                marginBottom: "20px"
            }}>

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) =>
                        setInputValue(e.target.value)
                    }
                    onKeyDown={handleKeyPress}
                    placeholder={placeholderText}
                    style={{
                        flex: 1,
                        padding: "10px",
                        border: "2px solid #ddd",
                        borderRadius: "4px 0 0 4px"
                    }}
                />

                <button
                    onClick={addTodo}
                    style={{
                        padding: "10px 20px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Thêm
                </button>

            </div>

            {/* FILTER */}
            <TodoFilter
                filter={filter}
                setFilter={setFilter}
            />

            {/* LIST */}
            {filteredTodos.length === 0 ? (

                <div style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#999"
                }}>
                    Không có công việc
                </div>

            ) : (

                filteredTodos.map(todo => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        editingId={editingId}
                        editText={editText}
                        setEditText={setEditText}
                        onStartEdit={startEdit}
                        onSaveEdit={saveEdit}
                        onCancelEdit={cancelEdit}
                    />

                ))

            )}

            {/* FOOTER */}
            {todos.length > 0 && (

                <div style={{
                    marginTop: "20px",
                    padding: "15px",
                    background: "#f9f9f9",
                    borderRadius: "4px"
                }}>

                    <p>
                        📌 Tổng số công việc:
                        {totalTodos}
                    </p>

                    <p>
                        ⏳ Chưa hoàn thành:
                        {activeCount}
                    </p>

                    <p>
                        ✅ Đã hoàn thành:
                        {completedCount}
                    </p>

                </div>

            )}

        </div>
    );
}

export default App;