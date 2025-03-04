let str = +prompt("Nhập số nguyên N: ")
let sum = 0;
if (Number.isInteger(str) === true) {
    for (let i = 0; i <= str; i++) {
        sum = sum + i;
    }
    alert("Tổng giá trị từ 1 đến " + str + " là " + sum)
}else if(Number.isInteger(str) !== true){
    alert("Chuỗi nhập vào không hợp lệ!")
}else if(str < 0){
    alert("Chuỗi nhập vào không hợp lệ!")
}

