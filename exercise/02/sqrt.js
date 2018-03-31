function sqrt(n){
    "use strict";
    let x
    for(x=0;x*x < n;x+=0.001){
    }
    return x
}

console.log('squrt(4)='+sqrt(4))
console.log('squrt(17.8)='+sqrt(17.8))