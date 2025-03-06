let arr = [12, 5, 8, 19, 1, 7, 3, 15, 10, 6];
arr.sort((a, b) => a - b);
let result = "";
for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
}
alert("Mảng sau khi sắp xếp tăng dần: " + result);