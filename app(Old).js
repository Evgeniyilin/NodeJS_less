console.log("Good");
let a;
a = 9;
console.log(a);
function test() {
    console.log('Всё будет ХОРОШО!');
}
test();
const b = () => {
    console.log('work');
}

b();
const c = [1,2,5,6,9];
console.log(c[2]);

//HomeWork

//task2
function f2 (a,b) {
    console.log(Math.max(a,b));
}
f2(10,33);

//task3
function f3 () {
    console.log(Math.floor(Math.random() * 10));
}
f3();