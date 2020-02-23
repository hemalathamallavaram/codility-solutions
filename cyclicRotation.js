function cyclicRotation(A,K){
    let result = [...A];
    let i=0,j=0;
    while(j<K){
        i=0;
        while(i<A.length-1){
            let newArr = [...result];
            result = [];    
            let ele = newArr.shift();
                result = [...newArr,ele];
            i++;
        }
        j++;
    }

    return result;
}
console.log(cyclicRotation([3, 8, 9, 7, 6],3));