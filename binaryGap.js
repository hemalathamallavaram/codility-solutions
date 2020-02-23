function convertToBinary(num){
    let binaryNum = '';
    while(num>=1){
        binaryNum += (num%2);
        num = Math.floor(num/2);
    }
    return binaryNum;
}
function binaryGap(num){
    let binaryNum = convertToBinary(num);
    console.log(binaryNum);
    let highestLen = 0;
    let gap = binaryNum.split('1');
    if(gap.length>=3){
        let gapArray = gap.filter((item)=>item!='');
        highestLen = 0;
        console.log(gapArray);
        for(let i=0;i<gapArray.length;i++){
            if(gapArray[i].length>highestLen){
                highestLen = gapArray[i].length;
            }
        }
    }
    return highestLen;
}