let num = +prompt("Nhập số tiền gửi: ")
let time = +prompt("Nhập số tháng gửi: ")
let interestRate = Number(0.043)
let interest = num * interestRate/12 * time

document.write("Số tiền gửi: " + num)
document.write("Số tháng gửi: " + time)
document.write("Lãi suất: 4.3%")
document.write("Tiền lãi: " + interest.toFixed(2))