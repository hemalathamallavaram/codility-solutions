//console.log(binaryGap(32));
//building seat array
//seat letter mapping
//seating arragement for family of 4 , so that atleast 2 members are together always
let SEAT_LETTER_MAP={
    'A':0,
    'B':1,
    'C':2,
    'P0':3,
    'D':4,
    'E':5,
    'F':6,
    'G':7,
    'P1':8,
    'H':9,
    'J':10,
    'K':11
}
let NUM_COLS = Object.keys(SEAT_LETTER_MAP).length;
function buildSeatArrayMap(row,colnum,mappings){
    let rowArray = [...new Array(row).fill(false)];
    let seatMatrix = rowArray.map((col,index)=>{
        col = [...new Array(colnum).fill(false)];

        for(let i=0;i<mappings.length;i++){
            if(index == mappings[i]['row']-1){
                col[mappings[i]['col']] = true;
            }
        }
        return col.map((itemCol,index)=>{
            if(index == SEAT_LETTER_MAP['P0'] || index == SEAT_LETTER_MAP['P1']){
                itemCol = 'path';
            }
            return itemCol;
        })
    })
    return seatMatrix;
    
}
function getSeatMappingFromString(seatsString){
    let seatsArr = seatsString.split(',');
    let seatNumMap = seatsArr.map((seat,index)=>{
        let seatNum = seat.split('');
        let rowSeatNum = SEAT_LETTER_MAP[seatNum[1]];
        return {'col':rowSeatNum,'row':+seatNum[0]};
    });
    return seatNumMap;
}
function fillExistingSeatsinMatrix(seatsString,numOfSeatRows){
    let seatMappings = getSeatMappingFromString(seatsString);
    let allotedMatrix = buildSeatArrayMap(numOfSeatRows,NUM_COLS,seatMappings);
    console.log(allotedMatrix);
    return allotedMatrix;
}
function findSuitableSeats(seatsString,rowNum){
    let seatMatrix = fillExistingSeatsinMatrix(seatsString,rowNum);
    let emptySeats;
        emptySeats = seatMatrix.map((seatRow,index)=>{
            return seatRow.map(seat=>{
                if(!seat) return seat;
            });
        })
    let seatsEmpty = [];
    for(let i=0;i<emptySeats.length;i++){
        for(let j=0;j<3;j++){
            seatsEmpty.push(emptySeats[i].slice(j,j+4));
        }
    }
    let seats = seatsEmpty.map((row,index)=>{
       return row.filter((item)=>{
           return (item === false);
       })
    });
    let potentialSeats = seats.filter((seat)=>(seat.length==2 || seat.length==4))
    return potentialSeats;
}
console.log(findSuitableSeats('3A,2B,2K',3));
