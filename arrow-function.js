// arrow function
const add2 = function (num1, num2){
    return num1 + num2;
}
// console.log(add2(23, 35));
// arrow function
const add4 = (num1, num2) => num1 + num2;
// console.log(add4(24, 56))

// arrow function 
const add5 = (name1, name2) => {
    const sum = name1 + name2;
    const sub = sum + name1;
    return sub;
}

// console.log(add5(23, 46))
// Spreed (...)
const age = [23, 34, 54, 65, 34];
const addAges = [44, 23, ...age, 67]
console.log(...addAges)

// 