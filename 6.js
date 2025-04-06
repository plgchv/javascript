// 1
// a
function task1a() {
  const x = parseFloat(prompt("Введите значение x для вычисления sin(x):"));
  if (!isNaN(x)) alert(`sin(${x}) = ${Math.sin(x)}`);
  else alert("Ошибка ввода!");
}

// b
function task1b() {
  const x1 = parseFloat(prompt("Введите x1:"));
  const y1 = parseFloat(prompt("Введите y1:"));
  const x2 = parseFloat(prompt("Введите x2:"));
  const y2 = parseFloat(prompt("Введите y2:"));
  const x = parseFloat(prompt("Введите x точки:"));
  const y = parseFloat(prompt("Введите y точки:"));

  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);

  const inside = x >= minX && x <= maxX && y >= minY && y <= maxY;
  alert(inside ? "Точка внутри квадрата" : "Точка снаружи");
}

// c
function task1c() {
  const num = parseInt(prompt("Введите натуральное число:"));
  if (num < 1) return alert("Неверный ввод!");

  let result = false;
  for (let a = 1; a <= Math.sqrt(num); a++) {
    const b = Math.sqrt(num - a * a);
    if (b === Math.floor(b) && b > 0) {
      result = true;
      break;
    }
  }
  alert(result ? "Можно представить" : "Нельзя представить");
}

// d
function task1d() {
  const email = prompt("Введите email:");
  alert(email.includes("@") ? "Email корректен" : "Нет символа @!");
}

// e
function task1e() {
  const s = prompt("Введите строку:");
  const latin = s.match(/[a-zA-Z]/g) || [];
  const percent = ((latin.length / s.length) * 100).toFixed(2);
  alert(`Латинских букв: ${percent}%`);
}

// f
function task1f() {
  const s = prompt("Введите строку:");
  const words = s
    .split(/\s+/)
    .filter((word, i, arr) => arr.indexOf(word) === i);
  alert(words.join(" "));
}

// g
function task1g() {
  const n = parseInt(prompt("Введите n:"));
  const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
  let output = "";
  arr.reverse().forEach((num, i) => {
    output += num + ((i + 1) % 5 === 0 ? "\n" : " ");
  });
  alert(output);
}

// h
function task1h() {
  const n = parseInt(prompt("Введите порядок матрицы:"));
  const matrix = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 100))
  );

  let mainDiag = [];
  let antiDiag = [];
  for (let i = 0; i < n; i++) {
    mainDiag.push(matrix[i][i]);
    antiDiag.push(matrix[i][n - 1 - i]);
  }
  const max = Math.max(...mainDiag, ...antiDiag);
  const min = Math.min(...mainDiag, ...antiDiag);

  for (let i = 0; i < n; i++) {
    if (matrix[i][i] !== max && matrix[i][i] !== min) matrix[i][i] = 0;
    if (matrix[i][n - 1 - i] !== max && matrix[i][n - 1 - i] !== min)
      matrix[i][n - 1 - i] = 0;
  }
  alert(matrix.map((row) => row.join(" ")).join("\n"));
}

// i
function task1i() {
  const n = parseInt(prompt("Введите количество дней:"));
  const date = new Date();
  date.setDate(date.getDate() + n);
  alert(date.toLocaleDateString());
}

// j
function task1j() {
  const today = new Date();
  const target = new Date(today.getFullYear(), 8, 1);
  if (today > target) target.setFullYear(today.getFullYear() + 1);
  const diff = (target - today) / (1000 * 3600 * 24 * 30);
  alert(`Осталось месяцев: ${diff.toFixed(1)}`);
}

// 3
const div = document.querySelector("div");
const ul = document.querySelector("ul");
const secondLi = document.querySelector("ul li:nth-child(2)");

// 4
const ageTable = document.getElementById("age-table");
const labels = ageTable.querySelectorAll("label");
const firstTd = ageTable.querySelector("td");
const searchForm = document.forms.search;
const firstInput = searchForm.querySelector("input");
const lastInput =
  searchForm.querySelectorAll("input")[
    searchForm.querySelectorAll("input").length - 1
  ];

// 5
function highlightCells() {
  const table = document.querySelector("table");
  if (!table) return;
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    for (let j = 0; j < cells.length; j++)
      if ((i + j) % 2 === 0) cells[j].style.backgroundColor = "red";
  }
}
highlightCells();

// 6
document.querySelectorAll("a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href && href.includes("://") && !href.startsWith("http://internal.com"))
    link.style.color = "orange";
});

// 7
function clear(elem) {
  elem.innerHTML = "";
}

// 8
function createList() {
  const count = parseInt(prompt("Введите количество пунктов:"));
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const text = prompt(`Введите текст пункта ${i + 1}:`);
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
createList();

// 9
// a
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.innerHTML = "";

  const header = document.createElement("header");
  const main = document.createElement("main");
  main.className = "content";
  const aside = document.createElement("aside");
  const section = document.createElement("section");
  const headerDiv = document.createElement("div");
  headerDiv.className = "header-d";
  headerDiv.textContent =
    "Выберите лицо, которое нравится вам больше остальных:";
  const display = document.createElement("div");
  display.className = "display";

  main.appendChild(aside);
  main.appendChild(section);
  section.appendChild(headerDiv);
  section.appendChild(display);
  body.appendChild(header);
  body.appendChild(main);
});

// b
let cardCount = 0;
const interval = setInterval(() => {
  if (cardCount >= 6) {
    clearInterval(interval);
    return;
  }
  const display = document.querySelector(".display");
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = `https://thispersondoesnotexist.com/?${cardCount + 1}`;
  const desc = document.createElement("div");
  desc.className = "description";
  const p = document.createElement("p");
  p.textContent = `Персона номер ${cardCount + 1}`;
  desc.appendChild(p);
  card.appendChild(img);
  card.appendChild(desc);
  display.appendChild(card);
  cardCount++;
}, 2000);

// c
const names = ["Анна", "Иван", "Мария", "Петр"];
const surnames = ["Иванова", "Петров", "Сидорова", "Смирнов"];
function generateName() {
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${name} ${surname}`;
}

document.querySelectorAll(".description p").forEach((p) => {
  p.textContent = generateName();
});
