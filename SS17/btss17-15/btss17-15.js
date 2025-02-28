let radius = +prompt("Nhập bán kính hình cầu: ")
let pi = 3.14
let Vc = (4*pi*radius*radius*radius)/3
let Sc = (4 * pi*radius*radius)
let Cc = 2 * pi * radius
document.write("<br>Bán kính hình cầu :" + radius + "cm") ;
document.write("<br>Diện tích mặt cầu :" + Sc + "cm2"); 
document.write("<br>Thể tích hình cầu :" + Vc + "cm3") ;
document.write("<br>Chu vi hình cầu :" + Cc + "cm") ;