let a = 5;
let b = 10;

function t() {
    let a = 8;
    a = a + b;
    let d = 3;
    let c = a + d;
    console.log(a + c);
}

t();


// homework
//task1
function f1() {
    let a1 = 44;
    return a1;
}

console.log(f1());

//task2
function f2(a1 = 2) {
    return a1;
}

console.log(f2(2));

//task3
function t3(a = 1, b = 2, c = 3) {
    return Math.max(a, b, c);
}

console.log(t3(44,33,53))

//task4...