let arr = [];
let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm");
for (let i = 0; i < count; i++) {
    let input = prompt("Mời bạn nhập vào phần tử muốn thêm");
    arr.push(input);
}
console.log(arr);