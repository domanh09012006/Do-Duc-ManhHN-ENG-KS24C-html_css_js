let number = +prompt("Nhập số nguyên N: ")
let str =""
for(let i=1; i<=number; i++){
    if(i % 5 === 0){
        str = str + i + " "
    }else{
        continue;
    }
}
alert("Các số chia hết cho 5 từ 1 đến "+ number +" là: "+str)