function Header({ title }) {

    return (

        <header
            style={{
                background: "#3498db",
                color: "white",
                padding: "20px"
            }}
        >

            <h1>{title}</h1>

            <nav>

                <a
                    href="/"
                    style={{
                        color: "white",
                        marginRight: "15px"
                    }}
                >
                    Trang chủ
                </a>

                <a
                    href="/about"
                    style={{
                        color: "white",
                        marginRight: "15px"
                    }}
                >
                    Giới thiệu
                </a>

                <a
                    href="/contact"
                    style={{
                        color: "white"
                    }}
                >
                    Liên hệ
                </a>

            </nav>

        </header>

    );
}

export default Header;