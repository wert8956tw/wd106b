function factorial(n) {
    "use strict";
  let result = 1
  for (let i=1; i<=n; i++) {
    result =result * i
  }
  return result
}

console.log('factorial(5)='+factorial(5))