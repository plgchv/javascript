"use strict";

// 1

function success(login) {
  console.log(`Привет ${login}`);
}

function failure(login, errorMessage) {
  console.log(
    `Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${errorMessage.toUpperCase()}.`
  );
}

function ask_password(login, password, success, failure) {
  const loginVowelsCount = login.match(/[uaeio]/gi || []).length;
  const passwordVowelsCount = password.match(/[aeiou]/gi || []).length;
  const loginConsonants = login.match(/[bcdfghjklmnpqrstvwxyz]/gi || []);
  const passwordConsonants = password.match(/[bcdfghjklmnpqrstvwxyz]/gi || []);

  let errorMessage;
  let errorCount = 0;

  if (loginVowelsCount !== passwordVowelsCount) {
    errorMessage = "Wrong number of vowels";
    errorCount++;
  }
  if (loginConsonants.toString() !== passwordConsonants.toString()) {
    errorMessage = "Wrong consonants";
    errorCount++;
  }

  switch (errorCount) {
    case 2:
      return failure(login, "Everything is wrong");
    case 1:
      return failure(login, errorMessage);
    case 0:
      return success(login);
  }
}

function main(login, password) {
  ask_password(login, password, success, failure);
}

let login = "logiin";
let password = "aaalgn";
main(login, password);

// 2

function readConfig(name, callback) {
  setTimeout(() => {
    console.log("(1) config from " + name + " loaded");
    callback();
  }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
  setTimeout(() => {
    console.log("(2) SQL query executed: " + statement);
    callback();
  }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
  setTimeout(() => {
    console.log("(3) Page retrieved: " + url);
    callback();
  }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
  setTimeout(() => {
    console.log("(4) Readme file from " + path + " loaded");
    callback();
  }, Math.floor(Math.random() * 1000));
}

function callback() {
  console.log("It is done!");
}

console.log('start');
readConfig('myConfig', () => {
  callback();
  doQuery('select * from cities', () => {
    callback();
    httpGet('http://google.com', () => {
      callback();
      readFile('README.md', () => {
        callback();
        console.log('end');
      });
    });
  });
});

// 3
function f1(x, callback) {
    setTimeout(() => {
        const result = x * x;
        console.log(`f1(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x;
        console.log(`f2(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2;
        console.log(`f3(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f4(x, callback) {
    setTimeout(() => {
        const result = x + 1;
        console.log(`f4(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f5(x, callback) {
    setTimeout(() => {
        const result = x - 1;
        console.log(`f5(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f6(x, callback) {
    setTimeout(() => {
        const result = x * 3;
        console.log(`f6(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function F(x, n) {
    console.log(`Вычисляю F(${x}) с n=${n}`);

    let total = 0;

    function f(i) {
        if (i > n) {
            console.log(`Ответ F(${x}) = ${total}`);
            return;
        }

        const func = eval(`f${i}`);
        func(x, (result) => {
            total += result;
            console.log(`Промежуточный результат f${i}: ${total}`);
            f(i + 1);
        });
    }

    f(1);
}

F(3, 2);
// F(3, 4);
// F(3, 6);
