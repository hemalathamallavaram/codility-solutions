function solution(A){
    let maxProd = 0;
    
    let prod = A.map((item,index)=>{
        let maxProd = 0;
        for(let i=index+1;i<=A.length;i++){
            
            let slicedArr = A.slice(index,i);
            let prod = slicedArr.reduce((acc,curr)=>{
                return (acc * curr);
            });
            if(prod > maxProd){
                maxProd = prod;
            }
            
            
        }

        return maxProd;
    });
    for(let i=0;i<prod.length;i++){
        if(prod[i]>maxProd) maxProd = prod[i];
    }
    return maxProd;
}
console.log(solution([1.0,0.1,-1.0,-7.0,3.0,-5.0,-2.5,0.0,1.0]))