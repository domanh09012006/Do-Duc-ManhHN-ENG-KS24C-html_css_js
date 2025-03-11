let arr = []
let count = +prompt("Nhap vao so luong phan tu: ")
let check = 0

while (check < count) {
    for (let i = 0; i < count; i++) {
        let input = +prompt("Nhap vao phan tu thu: " + i+1)
        if(Number.isInteger(input) === true){
            arr.push(input)
            check++
        }else{
            alert("Gia tri khong hop le")
        }
    }
}
function findEven(arr){
    let arrEven = ""
    let even = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            arrEven = arrEven + arr[i] + " "
            even++
        }
    }
    if(even>0){
        alert(arrEven)
    }else{
        alert("Mang khong chua so chan")
    }
}
findEven(arr)
