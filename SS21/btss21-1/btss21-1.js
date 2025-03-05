let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = +prompt("Nhap vao so nguyen: ")
    if (num % 2 !== 0) {
        sum += num
    }
}
alert("Tong cac so le vua nhap la: " + sum)
