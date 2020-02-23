function missingElem(A){
    let sum = A.reduce((acc,curr)=>{
        return (acc+curr);
    });
    let arthematicSum = ((A.length+1)*(A.length+1+1))/2;
    return (arthematicSum - sum);
}
console.log(missingElem([2,3,1,5]));