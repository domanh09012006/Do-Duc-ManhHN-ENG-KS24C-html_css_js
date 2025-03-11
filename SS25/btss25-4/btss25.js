function NumberNum(a){
    let count = 0
    for(let i = 1; i<=a; i++){
        if(a%i === 0){
            count++
        }
    }
    if(count < 3){
        console.log("So nay la so nguyen to!")
    }else{
        console.log("So nay khong phai so nguyen to")
    }
}
let check = 0
let number
while(check < 1){
    number = +prompt("Nhap vao 1 so nguyen duong: ")
    if(number<2 || Number.isInteger(number) !== true){
        alert("Du lieu khong hop le!")
    }else{
        check++
    }
}
NumberNum(number);