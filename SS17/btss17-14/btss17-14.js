let radius = +prompt("Nhập bán kính hình trụ: ")
let high = +prompt("Nhập chiều cao hình trụ: ")
let pi = 3.14
let Sxq = radius*2*pi*high
let Stp = Sxq + 2*pi*radius*radius
let Vt = high * pi * radius * radius
document.write("<br>Bán kính hình trụ :" + radius + "cm") ;
document.write("<br>Chiều cao hình trụ :" + high + "cm") ;
document.write("<br>Diện tích xung quanh hình trụ :" + Sxq + "cm2"); 
document.write("<br>Diện tích toàn phần hình trụ :" + Stp + "cm2") ;
document.write("<br>Thể tích hình trụ :" + Vt + "cm3") ;
