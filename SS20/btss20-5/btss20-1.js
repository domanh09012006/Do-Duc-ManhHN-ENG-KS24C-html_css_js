let num1 = +prompt("Nhập cơ số a: ")
let num2 = +prompt("Nhập số mũ b: ")
let num3=1
if(Number.isInteger(num1) === true && Number.isInteger(num2) === true){
    for(let i=0; i<num2; i++){
        num3 = num3*num1;
    }
    alert("Gía trị lũy thừa là: " + num3)
}else{
    alert("Không hợp lệ!")
}