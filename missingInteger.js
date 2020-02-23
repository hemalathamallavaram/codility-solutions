function missingInteger(N){
    let sortedArr = N.sort();
    let hash_map = [];
    let missingVal = 0;
    sortedArr.map((item)=>{
        if(item>0) hash_map[item] = true;
    });
    let i=1;
    for(i=1;i<hash_map.length;i++){
        if(!hash_map[i]) {
            missingVal = i; break;
        }
    }
    if(missingVal === 0 && i == hash_map.length){
        missingVal = hash_map.length;
    } else if(i==1){
        missingVal =1;
    }
    return missingVal;
}
console.log(missingInteger([-1,-3]));
console.log(missingInteger([1,2,3]));