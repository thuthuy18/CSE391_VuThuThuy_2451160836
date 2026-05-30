function StudentCard() {
    return (
        <div className="card">
            <img src="avatar.png" alt="Avatar" />

            <h2>Vũ Thu Thủy</h2>

            <p>Sinh viên năm 2</p>

            <label htmlFor="email">Email:</label>

            <input type="email" id="email" />
        </div>
    );
}

export default StudentCard;