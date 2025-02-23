// Task 1: Creating a Product Class

class Product { // create class product 
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() { // adding get details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) { // adding update stock
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log("Insufficient stock available.");
        }
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10); // a test case
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());

// Task 2: Creating an Order Class

class Order { // create class 
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;
        product.updateStock(quantity);
    }

    getOrderDetails() { // adding getorderdetails 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

// Task 3: Creating an Inventory Class

class Inventory {
    constructor() {
        this.products = []; // empty product array 
        this.orders = []; // orders array
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

// Task 4: Implementing Order Management

placeOrder(orderId, product, quantity) {
    if (product.stock >= quantity) {
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
    } else {
        console.log("Not enough stock to fulfill the order.");
    }
}

listOrders() {
    this.orders.forEach(order => console.log(order.getOrderDetails()));
}

// Task 5: Implementing Product Restocking

restockProduct(productId, quantity) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
        product.stock += quantity;
    } else {
        console.log("Product not found.");
    }
}
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());

inventory.restockProduct(101, 5);
console.log(prod1.getDetails());
