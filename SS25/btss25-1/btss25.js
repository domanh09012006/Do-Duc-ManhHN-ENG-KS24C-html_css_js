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
function findMin(arr){
    let min = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}
let Min = findMin(arr)
alert("Phan tu nho nhat trong mang la: "+ Min)


