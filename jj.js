let date = new Date()
let hms = [date.getHours(), date.getMinutes(), date.getSeconds()];
function checkingTime(){
    let times = {
        13 : "1",
        14 : "2",
        15 : "3",
        16 : "4",
        17 : "5",
        18 : "6",
        19 : "7",
        20 : "8",
        21 : "9",
        22 : "10",
        23 : "11",
        0 :  "12",
    }
    if(hms[0] > 12 ){
        return times[hms[0]]
    }else{return hms[0]}
}

console.log(checkingTime())