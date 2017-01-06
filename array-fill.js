console.log("Array.fill() can be used to replace entries in an array with a static value.")

console.log("\n arr = [5, 5, 5, 'hi']");
let arr = [5, 5, 5, 'hi'];

console.log("\n arr.fill(0)")
console.log(arr.fill(0));

arr = [5, 5, 5, 'hi']; //reset arr each time since .fill() is a mutator
console.log("\n arr.fill(0, 1, 2)")
console.log(arr.fill(0, 1, 2))

arr = [5, 5, 5, 'hi'];
console.log("\n arr.fill(0, 2)")
console.log(arr.fill(0, 2))

arr = [5, 5, 5, 'hi'];
console.log("\n arr.fill(8, -1, -3)")
console.log(arr.fill(8, -1, -3));
