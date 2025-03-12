let arr = []
let count = +prompt("Nhap vao do dai mang: ")
if(count === 0){
    console.log("Mang rong!")
}else{
    for(let i=0; i<count; i++){
        let input = +prompt("Nhap vao cac phan tu: ")
        if(Number.isInteger(input)!==true || input<0 || input === '\n' || input ===" "){
            alert("Gia tri khong hop le!")
        }else{
            arr.push(input)
        }
    }
}
let newArr = arr.filter(function(element, index){
    if (element < 2) return false;
    for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) return false;
    }
    return true;
})
console.log(newArr)