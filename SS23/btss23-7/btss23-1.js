let minValue = Number.MIN_SAFE_INTEGER;
let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

let arr = [];
for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    arr.push(input);
}

let max = minValue, secondMax = minValue;
for (let num of arr) {
    if (num > max) {
        secondMax = max;
        max = num;
    } else if (num > secondMax && num < max) {
        secondMax = num;
    }
}

if (secondMax === minValue) {
    console.log("Không có số lớn thứ hai");
} else {
    console.log(`Số lớn thứ hai trong mảng là: ${secondMax}`);
}
