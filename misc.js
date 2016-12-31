Array.prototype.sum = function() {
  let total = 0
  for (let i = 0; i<this.length; i++) {
    total += this[i]
  }
  return total;
}

let a = [1, 2, 3, 4]
console.log(a.sum())
