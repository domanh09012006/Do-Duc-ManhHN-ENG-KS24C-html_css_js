let arr = []
let count = +prompt("Nhap so luong phan tu cho mang: ")
let check = 0
for(let i = 0; i<count; i++){
    let input = +prompt("Nhap phan tu thu "+ (i+1) +" : ")
    if(!Number.isInteger(input)){
        alert("Du lieu nhap vao khong hop le!")
        i--
    }else{
        arr.push(input)
    }
}
function checkArr(arr){
    let hieu = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== hieu) {
            return false;
        }
    }
    return true;
}
console.log(checkArr(arr))