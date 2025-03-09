let arr = []
let count = +prompt("Nhap so ki tu vao mang: ")
let check = 0
let sum = 0
if (count === 0) {
    alert("Mang khong co phan tu!")
}else if(count < 0){
    alert("So luong phan tu khong duoc am")
}else {
    for (let i = 0; i < count; i++) {
        let input = prompt("Nhap ki tu thu " + i + 1)
        arr.push(input)
    }
    for (let i = 0; i < count; i++) {
        if (Number.isInteger(parseInt(arr[i])) === true) {
            check++
            arr[i] = Number(arr[i])
            sum+=arr[i]
        }
    }
    if (check < 1) {
        alert("Khong co ki tu so trong mang")
    } else {
        console.log(sum)
    }
}


 