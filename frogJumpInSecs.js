function frogJump(X,Y,D){
    let numOfJumps = 0;
    let jumpPoint = X;
    while(jumpPoint <= Y){
        jumpPoint = jumpPoint +D;
        numOfJumps++;
    }
    return numOfJumps;
}
//console.log(frogJump(10,85,30));

function frogAbleToReachInSecs(X,A){
    let numArr = A.map((item,index)=>{
        if(item===X){
            return index;
        } else{
            return -1;
        }
    });
    return (numArr.filter((item)=>item!=-1).length[0] || -1);
}
console.log(frogAbleToReachInSecs(5,[1,3,1,4,2,3,5,4]));