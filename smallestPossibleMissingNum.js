function smallestPos(A){
    orderedArr = [];
    for (let i = 0; i < A.length; i++) {
        if (!orderedArr[A[i]]) {
            orderedArr[A[i]] = true;
         }
    }
    if (orderedArr.length === 0) return 1;
    for (let i = 1; i < orderedArr.length; i++) {
        if (!orderedArr[i]) {
            return i;
        }
    }
    return orderedArr.length;
}
console.log(smallestPos([1,3,6,4,1,2]));