function isPermutation(A){
    let hash_map = {};
    let isPerm = 0;
    let i=0
    let sortedArr = A.sort((a,b)=>(a-b));
    if(sortedArr.length === sortedArr[A.length-1]){
        for(i=0;i<sortedArr.length;i++){
        if(!hash_map[sortedArr[i]]) {
            hash_map[sortedArr[i]] = 1;;
        }  else{
            break;
        }
    }
        if(i===A.length){
        isPerm = 1;
    }
    }
    return isPerm;
}
console.log(isPermutation([4,2,3,2]));