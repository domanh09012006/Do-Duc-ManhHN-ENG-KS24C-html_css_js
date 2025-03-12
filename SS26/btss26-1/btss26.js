let arr = []
let check = 0
for(let i = 0; i<10; i++){
    let input = +prompt("Nhap vao 10 so nguyen: ")
    if(Number.isInteger(input)!==true){
        check++
    }
    arr.push(input)
}
let newArr = arr.filter(function(element, index){
    return element>10
});
if(check>0){
    console.log("Du lieu khong hop le!")
}else{
    console.log(newArr)
}