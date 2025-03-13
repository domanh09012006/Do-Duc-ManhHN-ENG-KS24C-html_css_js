let arr = [];
let count = +prompt("Nhập vào độ dài mảng: ");
if (count >= 10 && count <= 20) {
    for (let i = 0; i < count; i++) {
        let input = +prompt("Nhập vào các phần tử: ");
        if (!Number.isInteger(input) || input < 0 || input === "\n" || input === " ") {
            alert("Giá trị không hợp lệ!");
            i--;
        } else {
            arr.push(input);
        }
    }
} else {
    console.log("Mảng phải có độ dài trong khoảng 10-20!");
}
if (arr.length > 0) {
    let totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    console.log("Tổng các số chẵn trong mảng là: ", totalEven);
    console.log("Tổng các số lẻ trong mảng là: ", totalOdd);
} else {
    console.log("Không có dữ liệu hợp lệ trong mảng.");
}