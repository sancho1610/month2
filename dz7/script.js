const orders = [
    { id: 1, customer: "Jhon", items: [ { name: "Ноутбук", price: 50000, quantity: 1 }, { name: "Мышь", price: 1500, quantity: 2 }, ], },
    { id: 2, customer: "Alan", items: [ { name: "Телефон", price: 30000, quantity: 1 }, { name: "Чехол", price: 1000, quantity: 3 }, ], },
    { id: 3, customer: "Jane", items: [ { name: "Клавиатура", price: 2500, quantity: 1 }, { name: "Монитор", price: 12000, quantity: 1 }, ], },
];
for (let order of orders) {
    let sum = 0;
    for (let item of order.items) {
        sum += item.price * item.quantity;
    }
    console.log(order.customer + " заказал на " + sum + "₽");
}