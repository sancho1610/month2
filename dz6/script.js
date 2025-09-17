var str = "user"
var num = 10
var u
console.log(u)
console.log(num > 0)
console.log(num < 0)
console.log(str * num)
console.log(typeof num)
console.log(typeof str)

var a = prompt("Введите сумму: ");
a = parseFloat(a);
var n = 0;
var discountAmount = 0;
var finalAmount = 0;
if (isNaN(a) || a < 0) {
    console.log("Ошибка: введите корректное положительное число.");
} else {
    if (a >= 1000 && a < 5000) {
        n = 5;
    } else if (a >= 5000 && a < 10000) {
        n = 10;
    } else if (a >= 10000) {
        n = 15;
    }
    discountAmount = a * (n / 100);
    finalAmount = a - discountAmount;
    finalAmount = finalAmount.toFixed(2);
    console.log("Сумма покупки: " + a + " руб.");
    console.log("Скидка: " + n + "%");
    console.log("Сумма скидки: " + discountAmount.toFixed(2) + " руб.");
    console.log("Итоговая сумма: " + finalAmount + " руб.");
}

