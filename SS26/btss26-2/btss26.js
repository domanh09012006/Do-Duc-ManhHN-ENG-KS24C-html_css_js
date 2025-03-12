let arr = []
let check = +prompt("Nhap vao so luong phan tu: ")
if (check === 0) {
    console.log("Mang khong co phan tu!")
} else {
    for (let i = 0; i < check; i++) {
        let input = prompt("Nhap vao chuoi ki tu: ")
        arr.push(input)
    }
    let newArr = arr.filter(function (element, index) {
        return element.length > 5
    });
    if (newArr.length === 0) {
        console.log("Mang khong co phan tu nao co chuoi lon hon 5!")
    } else {
        console.log(newArr)
    }
}


