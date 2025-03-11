let check = 0;
let num1 = 0, num2 = 0
while(check<1){
    num1 = +prompt("Nhap vao so nguyen thu 1: ")
    num2 = +prompt("Nhap vao so nguyen thu 2: ")
    if(Number.isInteger(num1) !== true || Number.isInteger(num2) !== true){
        alert("Du lieu khong hop le!")
    }else{
        check++
    }
}
function sum(num1, num2){
    return num1 + num2
}
let sumNumber = sum(num1, num2)
console.log("Tong hai so la: "+ sumNumber)