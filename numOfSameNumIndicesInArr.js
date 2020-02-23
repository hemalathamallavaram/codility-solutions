function solution(A) {
    let arr = A.slice(0,A.length);
    let indicesArr = arr.map((item,index)=>{
        let sameIndex = [];
        let subArr = arr.slice(index+1,A.length);
        for(let i=0;i<subArr.length;i++){
            if(item == subArr[i]){
                sameIndex.push([index,i+index+1]);
            }
        }
        return sameIndex;
    });
    const flat = indicesArr.reduce((acc, val) => acc.concat(val), []);
    return flat.length;
}
console.log(solution([3,5,6,3,3,5]))