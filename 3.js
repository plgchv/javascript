"use strict"
// 1
let user = {
    name: "John",
    surname: "Smith"
}

user.name = "Pete"
delete user.name

// 2

let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: 9.0
}

for (let key in myBrowser)
    console.log(myBrowser[key])

// 3
function isEmpty(obj) {
    return Object.keys(obj).length == 0 ? true : false
}

console.log(isEmpty(myBrowser))

// 4
// const user = {
//     name: "John"
// }

// user.name = "Pete" // Работает 
// user = 123 // Не работает (const защищает от изменения только переменную)

// 5
function multiplyNumeric(obj) {
    for (let key of Object.keys(obj))
        if (typeof obj[key] === 'number')
            obj[key] *= 2
}

multiplyNumeric(myBrowser)
console.log(myBrowser)

// 6
let calculator = {
    read(a, b) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}
calculator.read(5, 3)
console.log(calculator.sum(), calculator.mul())

// 7
let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function() {
        console.log(this.step)
        return this
    }
}

ladder.up().up().down().showStep().down().showStep()

// 8
function Browser(name, version) {
    this.name = name
    this.version = version

    this.aboutBrowser = function() {
        console.log(`Браузер: ${this.name}, Версия: ${this.version}`)
    }
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", 9.0)
myBrowser2.aboutBrowser()

// 9
function Employee(name, department, phone_number, salary) {
    this.name = name
    this.department = department
    this.phone_number = phone_number
    this.salary = salary

    this.aboutEmployee = function() {
        console.log(`Name: ${name}\nDepartment: ${department}\nPhone number: ${phone_number}\nSalary: ${salary}`)
    }
}

let employee = new Employee("Name", "Department", 123, 100000)
employee.aboutEmployee()


// 10
function Calculator() {
    this.read = function(a, b) {
        this.a = a
        this.b = b
    }
    this.sum = function() {
        return this.a + this.b
    }
    this.mul = function() {
        return this.a * this.b
    }
}

let calculator2 = new Calculator()
calculator2.read(1, 2)
console.log(calculator.sum(), calculator.mul())

// 11
function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function(a) {
        this.value += a
    }
}

let accumulator = new Accumulator(1)
accumulator.read(10)
accumulator.read(5)
console.log(accumulator.value)

// 12
let animal = {
    jumps: null
}
let rabbit = {
    __proto__: animal,
    jumps: true
}
console.log(rabbit.jumps) // true (Выводит значение свойства jumps объекта rabbit)
delete rabbit.jumps
console.log(rabbit.jumps) // null (Значение свойства jumps объекта rabbit было удалено выше, поэтому он выводит наследованное значение)
delete animal.jumps
console.log(rabbit.jumps) // undefined (Свойство jumps было удалено в обоих объектах)

// 13
let animal2 = {
    eat() {
        this.full = true
    }
}

let rabbit2 = {
    __proto__: animal2
}
rabbit2.eat()
console.log(animal2)
console.log(rabbit2) // rabbit2 получит свойство full

// 14
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food)
    }
}
let speedy = {
    stomach: [],
    __proto__: hamster
}

let lazy = {
    stomach: [],
    __proto__: hamster
}
speedy.eat("apple")
console.log(speedy.stomach)
console.log(lazy.stomach)

// 15
// Добавление свойства по умолчанию к встроенному объекту
String.prototype.color = "black"
// Добавление (изменение) метода к встроенному объекту
String.prototype.write = stringWrite
String.prototype.size = 15

function stringWrite() {
    console.log("Цвет текста: " + this.color)
    console.log("Текст: " + this.toString())
    console.log("Размер шрифта: " + this.size)
}
// используем измененный класс
let s = new String("Это строка")
s.color = "red"
s.write()
let s2 = new String("Вторая строка")
s2.size = 14
s2.write()

// 16
function Rabbit2() {}
Rabbit2.prototype = {
    eats: true
}
let rabbit4 = new Rabbit2()
console.log(rabbit4.eats)
Rabbit2.prototype = {}
Rabbit2.prototype.eats = false
delete rabbit4.eats
delete Rabbit2.prototype.eats
console.log(rabbit4.eats)

// 17
class Clock2 {
    constructor(hours, mins, secs) {
        this.hours = hours
        this.mins = mins
        this.secs = secs
    }
    time() {
        console.log(`${this.hours}:${this.mins}:${this.secs}`)
    }
}

let clock2 = new Clock2(12, 12, 12)
clock2.time()

// 18
class Animal {
    constructor(name) {
        this.name = name
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name)
        this.created = Date.now()
    }
}
const rabbit3 = new Rabbit("Белый кролик")
console.log(rabbit3.name)

//19
class Clock {
    constructor(template) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor(template, precision=1000) {
      super(template)
      this.precision = precision
    }
  
    start() {
      this.render()
      this.timer = setInterval(() => this.render(), this.precision)
    }
  };

let extended_clock = new ExtendedClock("h m s", 1000)
extended_clock.start()

// 20
class Stock {
    constructor() {
        this.boxes = []
        this.id = 0
    }
    add(w, v) {
        this.boxes.push({ w, v, serialNumber: this.id })
        this.id++
    }

    getByW(min_w) {
        let suitableBox = null

        for (const box of this.boxes)
            if (box.w >= min_w)
                if (!suitableBox || box.serialNumber < suitableBox.serialNumber)
                    suitableBox = box

        return suitableBox ? suitableBox.serialNumber : -1
    }

    getByV(min_v) {
        let suitableBox = null

        for (const box of this.boxes)
            if (box.v >= min_v)
                if (!suitableBox || box.serialNumber < suitableBox.serialNumber)
                    suitableBox = box

        return suitableBox ? suitableBox.serialNumber : -1;
    }
}


const stock = new Stock()
stock.add(10, 20)
stock.add(15, 25)
stock.add(5, 15)
stock.add(20, 30)

console.log(stock.getByW(10))
console.log(stock.getByW(15))
console.log(stock.getByW(30))

console.log(stock.getByV(15))
console.log(stock.getByV(25))
console.log(stock.getByV(35))