function greet() {
    console.log('Hello, World!');
}

function add(a, b) {
    return a + b;
}

const multiply = (a, b) 
 return a * b;

function fetchData(callback) {
    setTimeout(() 
{
        const data = { name: 'Alice', age: 25 };
        callback(data);
    }, 1000);
}

function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}

greet();
console.log(`Addition: ${add(2, 3)}`);
console.log(`Multiplication: ${multiply(4, 5)}`);  // Corrected this line
fetchData((data) => {
    console.log(`Fetched Data: ${JSON.stringify(data)}`);
});
console.log(introduce('Bob', 30));
