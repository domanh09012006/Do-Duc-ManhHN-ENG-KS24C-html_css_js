let num1 = +prompt("Nhâp vào số thứ nhất: ");
let num2 = +prompt("Nhâp vào số thứ high: ");
let num3 = +prompt("Nhâp vào số thứ bar: ");
let max = num1;
if(num2 > max){
    max = num2;
}
if(num3 > max){
    max = num3;
}
document.write("Số lớn nhất là: " + max);