let num1 = +prompt("Nhập số thứ nhất: ")
let num2 = +prompt("Nhập số thứ hai: ")
let num3 = +prompt("Nhập số thứ ba: ")
let max = num1
if(num2 > num1 && num2 > num3){
    max = num2
    alert(max + " là số lớn nhất trong 3 số!")
}else if(num3 > num1 && num3 > num2){
    max = num3
    alert(max + " là số lớn nhất trong 3 số!")
}else{
    alert(max + " là số lớn nhất trong 3 số!")
}