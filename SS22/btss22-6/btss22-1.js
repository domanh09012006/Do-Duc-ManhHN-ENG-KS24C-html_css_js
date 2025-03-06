let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]
let num = +prompt("Nhập vào 1 số nguyên bất kì: ")
let check = 0;
for(let i = 0; i<arr.length; i++){
    if(num === arr[i]){
        check++
    }
}
if(check>0){
    alert("Số "+ num +" xuất hiện trong mảng "+ check +" lần.")
}else{
    alert("Số "+ num +" không tồn tại trong mảng. ")
}

