function divisibleRange(A,B,K){
    let newArr = [];
    for(let i=A;i<=B;i++){
        if(i%K === 0){
            newArr.push(i);
        }
    }
    return newArr.length;
}
console.log(divisibleRange(6,11,2));