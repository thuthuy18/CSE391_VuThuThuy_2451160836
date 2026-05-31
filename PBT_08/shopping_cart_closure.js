function createCart() {

    let items = [];

    return {

        addItem(name, price) {
            items.push({ name, price });
        },

        printCart() {
            items.forEach((item, index) => {
                console.log(
                    `${index + 1}. ${item.name} - $${item.price}`
                );
            });
        },

        getTotal() {
            return items.reduce((sum, item) => {
                return sum + item.price;
            }, 0);
        },

        removeItem(name) {
            items = items.filter(
                item => item.name !== name
            );
        }

    };
}

const cart = createCart();

cart.addItem("Mouse", 100);
cart.addItem("Keyboard", 200);
cart.addItem("Monitor", 300);

cart.printCart();

console.log(cart.getTotal());

cart.removeItem("Keyboard");

cart.printCart();

console.log(cart.getTotal());

console.log(cart.items);