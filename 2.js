// functions
// 1
function difference(a, b) {
    console.log(a-b)
    return a-b
}

res = difference(5, 4)
console.log(res)

// 2
function hi(age) {
    if (age < 18)
        console.log("Привет, малыш!")
    else
        console.log("Здравствуйте, юноша!")
}

// 3
function max_of_3(a, b, c) {
    nums = [a, b, c]
    max_num = 0
    for (num of nums)
        if (num > max_num)
            max_num = num
    return max_num
}

console.log(max_of_3(1, 2, 3))

// 4
// Локальная
// Глобальная
// variable, которая объявлена в функции f локальна, поэтому main ничего не знает о ней

// 5
function f(x, y, z) {
    return ((Math.max(x,y)+Math.max(x+y,z))/(Math.max(0.5, x+z)**2))
}
console.log(f(1, 1, 1))

// 6
function perimeter(...coords) {
    if (coords.length % 2 !== 0)
        return "Нечетное кол-во координат"
    p = 0
    n = coords.length / 2

    for (i = 0; i < n; i++) {
        x1 = coords[i * 2];
        y1 = coords[i * 2 + 1]
        x2 = coords[(i + 1) % n * 2]
        y2 = coords[(i + 1) % n * 2 + 1]

        d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        p += d
    }
    return p
}

console.log(perimeter(0, 0, 4, 0, 4, 3, 0, 3))

// 7
function rec(n) {
    res = 1
    sum = 0
    while (n > 0) {
        sum += res
        res = Math.sin(sum)
        n--
    }
    return res
}

console.log(rec(2))

// arrays
// 1
arr = [1, 2, 3]
console.log(arr[2])
console.log(arr.length)
arr.splice(1, 1)
for (el of arr) {
    console.log(el)
}

// 2
countries = ["Russia", "USA"]
populations = ["143kk", "334kk"]
function output(arr1, arr2) {
    for (i = 0; i < arr1.length; i++)
        console.log(arr1[i], arr2[i])
    for (i in arr1)
        console.log(arr1[i], arr2[i])
}

output(countries, populations)

// 3
arr = ["January", "February", "March", "April", "May", "June"]
len = arr.pop()
console.log(arr.join(" "))
console.log(len)

// 4
a = [1, 2, 3, 4, 5, 6, 7]
t = a.slice(0, 3)
console.log(t)

// 5
a = [1, 2, 3, 4, 5, 6, 7]
d = a.splice(1, 3)
console.log(a)

// 6
a = [1, 2, 3, 4, 5]
console.log(a.reverse())

// 7
a = ['c', 5, 2, 'b', 3, 1, 4, 'a']
console.log(a.sort())

// 8
a = [1, 2, 3, 4, 5]
console.log(a.join("+"))

// 9
function median(arr) {
    arr.sort()

    mid = Math.floor(arr.length / 2)
    if (arr.length % 2 === 0)
        return (arr[mid - 1] + arr[mid]) / 2
    else
        return arr[mid]
}

a = [1, 2, 5, 4, 6]
b = [8, 2, 5, 9, 5]

console.log(median(a), median(b))

// 10
a = Array.from({ length: 3}, () => Math.random())
console.log(a)
max_num = Math.max(...a)
min_num = Math.min(...a)
console.log(max_num, min_num)
i_max = a.indexOf(max_num)
i_min = a.indexOf(min_num)
a[i_max] = a[i_min]
a[i_min] = max_num
console.log(a)

// 11
function foo(arr) {
    is_sorted = true
    index = -1

    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            is_sorted = false
            index = i + 1
            break
        }
    }

    if (is_sorted)
        console.log(arr.reverse())
    else
        console.log(index)
}

a = [5, 4, 3, 2, 1]
foo(a)
b = [5, 3, 4, 2, 1]
foo(b)

// 12
a = [-1, 2, -3, 4, 5]

for (i in a)
    if (i % 2 !== 0 && a[i] > 0)
        a[i] *= 3
    else if (i % 2 === 0 && a[i] < 0)
        a[i] /= 5
console.log(a)

// 13
m = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) - 10))
console.table(m)
for (str of m)
    for (el of str)
        if (-5 <= el && el <= 7)
            console.log(el)

// 14
M = 4
N = 5
m = Array.from({ length: M }, () => Array.from({ length: N }, () => Math.floor(Math.random() * 20) - 10))
console.table(m)
sum = 0
for (str of m)
    sum += Math.max(...str)
console.log(sum)

sum = 1
for (i = 0; i < N; i++) {
    col = []
    for (j = 0; j < M; j++)
        col.push(m[j][i])
    sum *= Math.min(...col)
}
console.log(sum)

// 15
a = {
    "Пушкин": ["Евгений Онегин", "Руслан и Людмила"],
    "Есенин": ["Анна Снегина", "Буря"],
    "Данцова": ["Смерть на свадьбе", "Тайна старого дома"],
    "Толстой": ["Война и мир", "Анна Каренина"]
}

for (author in a) {
    console.log(author)
    a[author].forEach(book => { console.log(book)})
    console.log()
}