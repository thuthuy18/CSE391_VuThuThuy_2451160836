/* =====================================================
   SHOPPING CART MODULE - CLOSURE
   File: shopping_cart.js
===================================================== */

function createCart() {

    /* =====================================================
       PRIVATE DATA
    ===================================================== */

    let items = [];

    let discountPercent = 0;

    let shippingDiscount = 0;


    /* =====================================================
       RETURN METHODS
    ===================================================== */

    return {


        /* =====================================================
           1. THÊM SẢN PHẨM
           - Nếu đã có → tăng quantity
        ===================================================== */

        addItem(product, quantity = 1) {

            const existingItem = items.find(item => {
                return item.id === product.id;
            });


            // Nếu sản phẩm đã tồn tại
            if (existingItem) {

                existingItem.quantity += quantity;

            }

            // Nếu chưa tồn tại
            else {

                items.push({
                    ...product,
                    quantity: quantity
                });

            }

        },


        /* =====================================================
           2. XÓA SẢN PHẨM THEO ID
        ===================================================== */

        removeItem(productId) {

            items = items.filter(item => {
                return item.id !== productId;
            });

        },


        /* =====================================================
           3. CẬP NHẬT SỐ LƯỢNG
        ===================================================== */

        updateQuantity(productId, newQuantity) {

            const item = items.find(item => {
                return item.id === productId;
            });


            if (item) {

                item.quantity = newQuantity;

            }

        },


        /* =====================================================
           4. TÍNH TỔNG TIỀN
        ===================================================== */

        getTotal() {

            // Tổng tiền trước giảm giá
            const subtotal = items.reduce((total, item) => {

                return total + (item.price * item.quantity);

            }, 0);


            // Tiền giảm theo %
            const discountAmount = subtotal * discountPercent;


            // Tổng cuối cùng
            return subtotal - discountAmount - shippingDiscount;

        },


        /* =====================================================
           5. ÁP DỤNG MÃ GIẢM GIÁ
        ===================================================== */

        applyDiscount(code) {

            // Reset giảm giá
            discountPercent = 0;

            shippingDiscount = 0;


            // SALE10 → giảm 10%
            if (code === "SALE10") {

                discountPercent = 0.1;

            }

            // SALE20 → giảm 20%
            else if (code === "SALE20") {

                discountPercent = 0.2;

            }

            // FREESHIP → giảm 30.000đ
            else if (code === "FREESHIP") {

                shippingDiscount = 30000;

            }

        },


        /* =====================================================
        6. IN GIỎ HÀNG
        ===================================================== */

        printCart() {

            console.log("┌──────────────────────────────────────────────────────────────┐");

            console.log("│ # │ Sản phẩm       │ SL │ Đơn giá      │ Tổng             │");

            console.log("├──────────────────────────────────────────────────────────────┤");


            // In từng sản phẩm
            items.forEach((item, index) => {

                const total = item.price * item.quantity;

                console.log(
                    `│ ${index + 1} │ ${item.name.padEnd(15)} │ ${String(item.quantity).padStart(2)} │ ${item.price.toLocaleString().padStart(12)} │ ${total.toLocaleString().padStart(16)} │`
                );

            });


            console.log("├──────────────────────────────────────────────────────────────┤");


            // Tính subtotal
            const subtotal = items.reduce((total, item) => {

                return total + (item.price * item.quantity);

            }, 0);


            // Tiền giảm %
            const discountAmount = subtotal * discountPercent;


            // In subtotal
            console.log(
                `│ Tạm tính: ${subtotal.toLocaleString().padStart(44)}đ │`
            );


            // Nếu có SALE10 hoặc SALE20
            if (discountPercent > 0) {

                console.log(
                    `│ Giảm giá (${discountPercent * 100}%): -${discountAmount.toLocaleString().padStart(30)}đ │`
                );

            }


            // Nếu có FREESHIP
            if (shippingDiscount > 0) {

                console.log(
                    `│ Freeship: -${shippingDiscount.toLocaleString().padStart(36)}đ │`
                );

            }


            // Tổng cuối
            console.log(
                `│ Tổng cộng: ${this.getTotal().toLocaleString().padStart(42)}đ │`
            );

            console.log("└──────────────────────────────────────────────────────────────┘");

        },
                /* =====================================================
           7. TỔNG SỐ SẢN PHẨM
        ===================================================== */

        getItemCount() {

            return items.reduce((total, item) => {

                return total + item.quantity;

            }, 0);

        },


        /* =====================================================
           8. XÓA TOÀN BỘ GIỎ HÀNG
        ===================================================== */

        clearCart() {

            items = [];

            discountPercent = 0;

            shippingDiscount = 0;

        }

    };

}


/* =====================================================
   TEST
===================================================== */

const cart = createCart();


/* =====================================================
   THÊM SẢN PHẨM
===================================================== */

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);


// Thêm lại iPhone → quantity tăng lên 2
cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);


/* =====================================================
   IN GIỎ HÀNG
===================================================== */

cart.printCart();


/* =====================================================
   ÁP DỤNG MÃ GIẢM GIÁ
===================================================== */

cart.applyDiscount("SALE10");


/* =====================================================
   IN GIỎ HÀNG SAU GIẢM GIÁ
===================================================== */

cart.printCart();


/* =====================================================
   TỔNG SỐ SẢN PHẨM
===================================================== */

console.log(
    "Số SP:",
    cart.getItemCount()
);


/* =====================================================
   XÓA SẢN PHẨM ID = 3
===================================================== */

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);