"use strict";

// 1
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);
console.log("Выводится: 1");
console.log("Промис может быть разрешен только один раз. После первого вызова resolve(1), промис переходит в состояние 'fulfilled' и больше не может изменить свое состояние. Поэтому второй resolve(2) игнорируется.");

// 2
function readConfigPromise(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("(1) config from " + name + " loaded");
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function doQueryPromise(statement) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("(2) SQL query executed: " + statement);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function httpGetPromise(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("(3) Page retrieved: " + url);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function readFilePromise(path) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("(4) Readme file from " + path + " loaded");
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

console.log('start');
readConfigPromise('myConfig')
    .then(() => {
        console.log("Config loaded!");
        return doQueryPromise('select * from cities');
    })
    .then(() => {
        console.log("Query executed!");
        return httpGetPromise('http://google.com');
    })
    .then(() => {
        console.log("Page retrieved!");
        return readFilePromise('README.md');
    })
    .then(() => {
        console.log("File read!");
        console.log('end');
    });

// 3
function f1Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * x;
            console.log(`f1(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f2Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = 2 * x;
            console.log(`f2(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f3Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = -2;
            console.log(`f3(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f4Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x + 1;
            console.log(`f4(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f5Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x - 1;
            console.log(`f5(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function f6Promise(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * 3;
            console.log(`f6(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
}

function FPromise(x, n) {
    console.log(`Вычисляю F(${x}) с n=${n}`);
    
    const functions = [f1Promise, f2Promise, f3Promise, f4Promise, f5Promise, f6Promise];
    
    let promiseChain = Promise.resolve(0);
    
    for (let i = 1; i <= n; i++) {
        promiseChain = promiseChain.then((total) => {
            return functions[i-1](x).then((result) => {
                const newTotal = total + result;
                console.log(`Промежуточный результат f${i}: ${newTotal}`);
                return newTotal;
            });
        });
    }
    
    return promiseChain.then((total) => {
        console.log(`Ответ F(${x}) = ${total}`);
        return total;
    });
}

FPromise(3, 2);

// 4
function addWithDelay(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || 
            a === undefined || b === undefined || 
            isNaN(a) || isNaN(b)) {
            reject(new Error('Аргументы должны быть числами'));
            return;
        }

        let currentSum = a;
        let callCount = 0;
        const secondArg = b;

        const interval = setInterval(() => {
            callCount++;
            currentSum += secondArg;
            
            console.log(`Итерация ${callCount}: сумма = ${currentSum}`);
            
            if (callCount >= 5) {
                clearInterval(interval);
                resolve(currentSum);
            }
        }, 2000);
    });
}

addWithDelay(5, 3)
    .then(result => console.log(`Финальный результат: ${result}`))
    .catch(error => console.error(`Ошибка: ${error.message}`));

addWithDelay("не число", 3)
    .then(result => console.log(`Финальный результат: ${result}`))
    .catch(error => console.error(`Ошибка: ${error.message}`));

// 5
async function executeTasksAsync() {
    try {
        console.log('start async');
        await readConfigPromise('myConfig');
        console.log("Config loaded!");
        await doQueryPromise('select * from cities');
        console.log("Query executed!");
        await httpGetPromise('http://google.com');
        console.log("Page retrieved!");
        await readFilePromise('README.md');
        console.log("File read!");
        console.log('end async');
    } catch (error) {
        console.error('Error:', error);
    }
}

async function FAsync(x, n) {
    console.log(`Вычисляю F(${x}) с n=${n} (async)`);
    
    const functions = [f1Promise, f2Promise, f3Promise, f4Promise, f5Promise, f6Promise];
    let total = 0;
    
    for (let i = 1; i <= n; i++) {
        const result = await functions[i-1](x);
        total += result;
        console.log(`Промежуточный результат f${i}: ${total}`);
    }
    
    console.log(`Ответ F(${x}) = ${total}`);
    return total;
}

async function addWithDelayAsync(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || 
        a === undefined || b === undefined || 
        isNaN(a) || isNaN(b)) {
        throw new Error('Аргументы должны быть числами');
    }

    let currentSum = a;
    let callCount = 0;
    const secondArg = b;

    return new Promise((resolve) => {
        const interval = setInterval(() => {
            callCount++;
            currentSum += secondArg;
            
            console.log(`Итерация ${callCount}: сумма = ${currentSum}`);
            
            if (callCount >= 5) {
                clearInterval(interval);
                resolve(currentSum);
            }
        }, 2000);
    });
}

(async () => {
    try {
        await executeTasksAsync();
        await FAsync(3, 2);
        const result = await addWithDelayAsync(10, 5);
        console.log(`Async результат: ${result}`);
    } catch (error) {
        console.error('Async ошибка:', error.message);
    }
})();

// 6
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log(`Результат из async функции: ${result}`);
    });
    
    return wait();
}

f().then(result => console.log(`Получен результат: ${result}`));

// 7
async function interviews(candidates) {
    async function performTask(name, taskNum, prepTime, defenseTime) {
        console.log(`${name} started the ${taskNum} task.`);
        
        await new Promise(resolve => setTimeout(resolve, prepTime * 100));
        
        console.log(`${name} moved on to the defense of the ${taskNum} task.`);
        
        await new Promise(resolve => setTimeout(resolve, defenseTime * 100));
        
        console.log(`${name} completed the ${taskNum} task.`);
    }
    
    async function rest(name) {
        console.log(`${name} is resting.`);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    async function candidateInterview(candidate) {
        const [name, prep1, def1, prep2, def2] = candidate;
        
        await performTask(name, 1, prep1, def1);
        
        await rest(name);
        
        await performTask(name, 2, prep2, def2);
    }
    
    const interviewPromises = candidates.map(candidate => candidateInterview(candidate));
    
    await Promise.all(interviewPromises);
}

const candidates = [
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
];

interviews(candidates).then(() => {
    console.log("Все собеседования завершены!");
});
