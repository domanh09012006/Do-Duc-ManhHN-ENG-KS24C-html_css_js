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
//Tong thuc te tru tong bi thieu
function checkArr(arr){
    let n = arr.length + 1;
    let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}
console.log(checkArr(arr))