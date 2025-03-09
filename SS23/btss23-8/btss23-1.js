let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
}
let check = 1;
if (arr.length < 3) {
    check = 0;
} else {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            check = 0;
            break;
        }
    }
}

if (check) {
    console.log("Mảng là dãy Fibonacci");
} else {
    console.log("Mảng không phải dãy Fibonacci");
}
