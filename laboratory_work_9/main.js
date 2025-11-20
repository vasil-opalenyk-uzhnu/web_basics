//Task 1
//1) За допомогою цикла реалізувати код, який виводить наступну картину
// *********
// *****************
// ***********************
// ***************************
// *****************************
// *****************************
// ***************************
// ***********************
// *****************
// *********

let prev = '*********';
for (let i = 8; i >= -10; i -= 2) {
    console.log(prev);
    let value  = '*'.repeat(Math.abs(i));
    prev = i >= 0 ? prev + value : prev.replace(value, '');
}

// 2) За допомогою циклу while / do-while реалізувати timer на 10 секунд
// Зверніть увагу на властивості обєкту/Конструктора Date (не використовуючи JS timer - setTimeOut, setInterval)

function customSetTimeout(callback, delay) {
    let start = Date.now();
    while (Date.now() - start < delay);
    callback();
}

customSetTimeout(() => console.log('Hello'), 1000);

// 3) Використовуючи літеральну нотацію створити обєкт car з властивістю speedometer = 0;
// Використовуючи методи Object додати до обєкту car наступні методи:
// setSpeedometer, що оновлює дані speedometer (сеттер)
// getSpeedometer, що повертає вміст speedometer (геттер)
// clearSpeedometr, що очищує вміст speedometer
// Модифікувати код таким чином, щоб можна було зробити наступне:
// car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed() // Ланцюжковий виклик

let car = {
    speedometer: 0,
}

Object.defineProperty(car, 'setSpeedometer', {
    value: function(value) {
        this.speedometer = value;
        return this;
    }
})

Object.defineProperty(car, 'getSpeedometer', {
    value: function() {
        return this;
    }
})

Object.defineProperty(car, 'clearSpeedometer', {
    value: function() {
        this.speedometer = 0;
        return this;
    }
})

console.log(
    car
    .setSpeedometer(100)
    .setSpeedometer(300)
    .getSpeedometer()
    .clearSpeedometer()
    .getSpeedometer()
);

// Task 2
class Transport {
    speed;
    places;

    constructor(speed, places) {
        this.speed = speed;
        this.places = places;
    }

    move(time) {
        return this.speed * time;
    }
}

class Car extends Transport {
    model;
    price;

    constructor(speed, places, model, price) {
        super(speed, places);
        this.model = model;
        this.price = price;
    }

    drive(time) {
        return `Машина проїхала ${super.move(time)}`;
    }
}

class Plane extends Transport {
    ticketPrice;
    payload;


    constructor(speed, places, ticketPrice, payload) {
        super(speed, places);
        this.ticketPrice = ticketPrice;
        this.payload = payload;
    }

    fly(time) {
        return `Літак пролетів ${super.move(time)}`;
    }
}

const bmw = new Car(100, 4, 'BMW', 100000);
const boeing777 = new Plane(10000, 400, 1000, 10000);

console.log(bmw.drive(10), boeing777.fly(10));
console.log(bmw.move(10), boeing777.move(10));
console.log(bmw.places, boeing777.places);

// Task 3
console.log(({}).toString());

// Результат: [object Object], тому що метод toString повертає рядок вигляду [object @@toStringTag]
// @@toStringTag - це спеціальний тег який міститься в кожному красу в js для прикладу в
// Object -> Object; Array -> Array; String -> String; Number -> Number and etc.

console.log(([]).toString());
console.log(([1, 2, 3]).toString());

// Результат: нічого, 1,2,3. Тому що в Array є власна реалізація toString яка повертає рядок який
// складається з переліку елементів массиву через кому.

// Для того щоб при виклику методу toString в массива ми отримали "[object Array]" є 2 способи
// це перевизначити метод прототипу для Array, або викликати метод глобального об'кту Object з іншим контекстом.
// 1. Спосіб
// Array.prototype.toString = function() {return "[object Array]"}
// console.log(([]).toString());

// 2. Спосіб
// console.log(Object.prototype.toString.call([]));