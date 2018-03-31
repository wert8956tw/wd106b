function isPrime(n) {
    for(var a =2;a<n;a++){
        if(n%a ===0)
          return false;
    }
    return true;
}
console.log("isPrime(33)="+isPrime(33));
console.log("isPrime(17)="+isPrime(17));