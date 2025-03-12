let arr = [];
for (let i = 0; i < 10; i++) {
    let input = prompt("Nhập vào 10 số nguyên: ");
    let num = Number(input);
    if (!Number.isInteger(num)) {
        alert("Giá trị không hợp lệ, vui lòng nhập số nguyên!");
    } else {
        arr.push(num);
    }
}

let max = Math.max(...arr);
let indexMax = arr.indexOf(max);
console.log("Vị trí chứa số lớn nhất là:", indexMax);
