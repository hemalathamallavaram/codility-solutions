






function minSumBetweenNumbers(A){
    let sortedArr = A.sort((a,b)=>{
        return (a-b);
    });

    let totalSum = A.reduce((acc,curr)=>{
        return (acc+curr);
    })
    //1+2+3+3+4
    //left sum = 1+2+3+3+4 , right sum =0
    //left = left sum -A[i] ,right sum = A[i]+right sum
    // left = left sum - A[i-1] right sum = A[i-1]+right sum
    let leftSum = totalSum;
    let rightSum =0;
    let minDiff = Infinity;
    for (let i=sortedArr.length-1;i>0;i--){
        leftSum = leftSum - sortedArr[i];
        rightSum = sortedArr[i]+rightSum;
        if(minDiff > Math.abs(leftSum - rightSum)) minDiff = Math.abs(leftSum - rightSum);
    }
    return minDiff;
}
console.log(minSumBetweenNumbers([3,1,2,4,3]));