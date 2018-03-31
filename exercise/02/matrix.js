function add(m1, m2){
    var m =[]
    for (var i=0 ;i < m1.length; i++){
        m[i]= []
        for(var j=0; j < m2.length; j++){
            m[i][j]=m1[i][j]+m2[i][j]
        }
    }
    return m
}

var M =add([[1, 2],[3,4]],[[1, 1],[1, 1]])
console.log('M=%j' , M)