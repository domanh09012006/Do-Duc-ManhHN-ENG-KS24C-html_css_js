let str = prompt("Nhập vào 1 chuỗi bất kì: ")
let character = prompt("Nhập vào kí tự cần tìm kiếm trong chuỗi vừa nhập: ")
let Length = str.length
let check = 1
for (let i = 0; i < Length; i++) {
    if (str[i] == character) {
        check++;
    }
}
if (check > 1) {
    alert("Ton taij tu can tim kiem")
} else {
    alert("Khong ton tai tu can tim kiem")
}