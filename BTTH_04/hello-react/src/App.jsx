function ProductListDemo() {

    // =========================
    // Danh sách sản phẩm
    // =========================

    const products = [

        {
            id: 1,
            name: "iPhone 15",
            price: 25000000
        },

        {
            id: 2,
            name: "AirPods Pro",
            price: 5000000
        },

        {
            id: 3,
            name: "Chuột Gaming",
            price: 500000
        },

        {
            id: 4,
            name: "Laptop Dell",
            price: 30000000
        },

        {
            id: 5,
            name: "Bàn phím cơ",
            price: 1500000
        }

    ];


    // =========================
    // Tính tổng giá
    // =========================

    const total = products.reduce(

        (sum, product) => sum + product.price,

        0

    );


    return (
        <div style={{ padding: "20px" }}>

            <h1>📝 Product List Rendering</h1>


            {/* Danh sách sản phẩm */}
            <h2>1️⃣ Danh sách sản phẩm</h2>

            {products.map(product => (

                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        marginBottom: "10px"
                    }}
                >

                    <p>
                        Tên sản phẩm:
                        {product.name}
                    </p>

                    <p
                        style={{
                            color:
                                product.price > 1000000
                                    ? "red"
                                    : "black"
                        }}
                    >
                        Giá:
                        {product.price.toLocaleString()}đ
                    </p>

                </div>

            ))}


            {/* Tổng giá */}
            <h2>2️⃣ Tổng giá tất cả sản phẩm</h2>

            <p>
                Tổng tiền:
                {total.toLocaleString()}đ
            </p>

        </div>
    );
}

export default ProductListDemo;