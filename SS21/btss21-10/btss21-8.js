let num = +prompt("Nhap so cac so gnuyen to muon in ra: ")
let check = 0
let i = 2;
while(check<num){
    let temp = 0;
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i%j===0){
                temp++;
                break;
            }
        }
        if(temp===0){
            console.log(i);
            check++
        }
        i++;
    }
    
    
