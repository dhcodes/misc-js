//implicit
let a = []
console.log(a)
console.log("isArray:", Array.isArray(a))

//method
let b = Array.from('hello')
console.log(b)
console.log("isArray:", Array.isArray(b))

//constructor
let c = new Array();
console.log(c)
console.log("isArray:", Array.isArray(c))

let d = new Array(3)
console.log(d)
console.log("isArray:", Array.isArray(d));

let e = Array.of(1,2,3);
console.log(e)
console.log("isArray:", Array.isArray(e));

console.log("Does not work:")
console.log("let f = Array.from(1, 2, 'hello')");
