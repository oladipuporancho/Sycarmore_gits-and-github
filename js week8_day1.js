// Question 1.	Closures for a Private Counter:

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Question 2.	Higher-Order Function with Callback:

function operate(num1, num2, callback) {
    return callback(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(operate(5, 10, add));       // Output: 15
console.log(operate(5, 10, multiply));  // Output: 50

//Question 33.	Async/Await Function with 1-Second Delay:

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data); // Output: Data fetched
}

getData();