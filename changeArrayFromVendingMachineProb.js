//Money - 5 , put to vending machine
//Product Price P- 0.99
//return array of denomniations with min number of coins
function changeProb(M,P){
    let CHANGE_ARRAY = [100,50,25,10,5,1];

    let change = (M*100)-(P*100);
    
    let result = CHANGE_ARRAY.map((key)=>{
            let demo = change/key; 
            if(demo>=1){
                change = change%key;
            }
        return Math.floor(demo);
    })
    return result.reverse();
}
console.log(changeProb(5,0.99));

