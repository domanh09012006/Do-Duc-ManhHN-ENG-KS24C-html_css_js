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
let cut = +prompt("Nhap kich thuoc mang con muon tach: ")
function checkArr(arr, n){
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
console.log(checkArr(arr, cut))