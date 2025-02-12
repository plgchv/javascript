const prompt = require("prompt-sync")();

// 1
let num = 5, str = "string", undef, boo = true, obj = {key1: "value1", key2: "value2"}

variables = [num, str, undef, boo, obj]

for (variable of variables)
    console.log(typeof(variable))

// 2
let n1 = 1, n2 = 2

console.log(n1 == n2)
console.log(n1 < n2)
console.log(n1 <= n2)
console.log(n1 > n2)

// 3
let a = false, b = null, c
variables = [a, b, c]

for (variable of variables)
    console.log(variable)

// 4
operations = [["1" + 2 + 3], [1 + 2 + "3"], ["1" - 2], 
            ["1" + "1" - "1"], ["foo"+-"bar"], [0=="0"], [0.5+0.1==0.6],
            [0.1+0.2==0.3], [true+true+true==3], [true==1], [true===3],
            [1<2<3], [3>2>1], [9007199254740991 + 1 == 9007199254740991 + 2],
            [Math.sqrt(-1) == Math.sqrt(-1)]]

for (operation of operations)
    console.log(operation)

// 5
let str1 = "Кто ", str2 = "ты ", str3 = "такой?"
concatenation = str1 + str2 + str3
console.log(concatenation)

// 6
str = "20", a = 5
console.log(str + a)
console.log(str - a)
console.log(str * "2")
console.log(str / 2)

// 7
a = "12"
b = "7.15"
console.log(Math.round(Number(a) % Number(b)))

// 8
x = 1
console.log((x*x-7*x+10)/(x*x-8*x+12))

// 9
let email = "name@mail.com";

console.log(email.includes('@') ? "'@' есть" : "'@' нету");

// 10
age = 31
if (18 <= age && age <= 30)
    console.log("Для молодежи")
else if (1 <= age && age <= 17)
    console.log("Для детей")
else
    console.log("Для всех возрастов")

// 11
a, b = 1, 2
let max
if (a > b)
    max = a
else
    max = b

// 12
let choice
while (true) {
    choice = Number(prompt("Введите число от 1 до 10 включительно: "))
    if (0 <= choice && choice <= 10)
        break
    else
        console.log("Попробуйте еще раз")
}

switch (choice) {
    case 1:
        console.log(`На ветке сидит ${choice} ворона`)
        break
    case 2: case 3: case 4:
        console.log(`На ветке сидит ${choice} вороны`)
        break
    case 0: case 5: case 6: case 7: case 8: case 9: case 10:
        console.log(`На ветке сидит ${choice} ворон`)
        break
}

// 13
num = 0
while (num <= 50) {
    if (num % 2 != 0)
        console.log(num)
    num += 1
}

for (let i = 0; i <= 50; i++)
    if (i % 2 != 0)
        console.log(i)

// 14
let sum = 0
for (let i = 1; i <= 15; i++) {
    if (i != 5 && i != 7)
        sum += i
}
console.log(sum)

// 15
x = 5
y = 3
res = 1
count = 0
if (y < 0) {
    x = 1/x
    y = -y
}
while (count < y) {
    res *= x
    count += 1
}
console.log(res)