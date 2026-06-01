function TodoItem({
    todo,
    onToggle,
    onDelete,
    editingId,
    editText,
    setEditText,
    onStartEdit,
    onSaveEdit,
    onCancelEdit
}) {

    return (

        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "12px",
            margin: "8px 0",
            background: todo.done ? "#f0fff0" : "#fff",
            border: "1px solid #eee",
            borderRadius: "4px"
        }}>

            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />

            <div style={{
                flex: 1,
                marginLeft: "10px"
            }}>

                {editingId === todo.id ? (

                    <div>

                        <input
                            value={editText}
                            onChange={(e) =>
                                setEditText(e.target.value)
                            }
                            style={{
                                padding: "5px",
                                width: "100%"
                            }}
                        />

                        <div style={{
                            marginTop: "5px"
                        }}>

                            <button
                                onClick={() =>
                                    onSaveEdit(todo.id)
                                }
                                style={{
                                    marginRight: "5px",
                                    background: "#27ae60",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 8px"
                                }}
                            >
                                Lưu
                            </button>

                            <button
                                onClick={onCancelEdit}
                                style={{
                                    background: "#95a5a6",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 8px"
                                }}
                            >
                                Hủy
                            </button>

                        </div>

                    </div>

                ) : (

                    <div>

                        <span style={{
                            textDecoration:
                                todo.done
                                    ? "line-through"
                                    : "none",

                            color:
                                todo.done
                                    ? "#999"
                                    : "#333"
                        }}>
                            {todo.text}
                        </span>

                        <p style={{
                            fontSize: "12px",
                            color: "#666",
                            margin: "5px 0"
                        }}>
                            🕒 {todo.createdAt}
                        </p>

                    </div>

                )}

            </div>

            {editingId !== todo.id && (

                <>

                    <button
                        onClick={() =>
                            onStartEdit(todo)
                        }
                        style={{
                            marginRight: "5px",
                            background: "#3498db",
                            color: "white",
                            border: "none",
                            padding: "5px 8px"
                        }}
                    >
                        ✏️
                    </button>

                    <button
                        onClick={() =>
                            onDelete(todo.id)
                        }
                        style={{
                            background: "#e74c3c",
                            color: "white",
                            border: "none",
                            padding: "5px 8px"
                        }}
                    >
                        🗑
                    </button>

                </>

            )}

        </div>

    );
}

export default TodoItem;