// let arr = [];
// let check = 0;
// let count = +prompt("Mời nhập vào số lượng phần tử của dãy: ");
// for (let i = 0; i < count; i++) {
//     let input = prompt("Mời bạn nhập vào các phần tử: ");
//     arr.push(input);
//     if (isNaN(input)) {
//         check++
//     }
// }
// if (check<1) {
//     for (let i = count - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }else{
//     alert("Mảng không hợp lệ!")
// }
let title = prompt("Nhập vào dãy số có bất kì")
let arr = [];
let str = title.toString();
let length = str.length;

if (Number.isInteger(Number(title))) {
    for(let i = length - 1; i >= 0; i--){
        arr.push(str[i]);
    }
    let result = arr.join(" ");
    alert("Dãy số sau khi đảo ngược:" + result); 
} else {
    alert("Dãy không hợp lệ");
}


