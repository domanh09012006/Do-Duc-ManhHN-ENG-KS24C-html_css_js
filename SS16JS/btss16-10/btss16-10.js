let min = +prompt("Nhập số thứ nhất: ");
let max = +prompt("Nhập số thứ hai: ");
let random = Math.floor(Math.random() * (max - min + 1) )+ min;
document.write("Số bất kì giữa 2 số là: " + random);