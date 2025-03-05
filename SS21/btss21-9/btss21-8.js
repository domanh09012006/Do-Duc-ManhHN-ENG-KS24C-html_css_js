let num1 = +prompt("Nhập vào 1 số nguyên: ")
let check = 0
if (Number.isInteger(num1) === true && num1 > 1) {
    for (let i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            check++;
        }
    }
}else{
    alert("không hợp lệ")
}
if (check < 1) {
    alert("Số vừa nhập là số nguyên tố!")
} else {
    alert("Số vừa nhập không phải số nguyên tố!")
}