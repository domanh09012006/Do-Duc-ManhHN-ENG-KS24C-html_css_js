let arr = [];
let rows, cols;
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
============================================
Lựa chọn của bạn :
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            rows = parseInt(prompt("Nhập số hàng:"));
            cols = parseInt(prompt("Nhập số cột:"));
            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = parseFloat(prompt("Nhập giá trị cho phần tử [" + i + "][" + j + "]:"));
                }
            }
            break;
        case 2:
            for (let i = 0; i < rows; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng: " + sum);
            break;
        case 4:
            let maxVal = arr[0][0];
            let maxRow = 0, maxCol = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (arr[i][j] > maxVal) {
                        maxVal = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            console.log("Phần tử lớn nhất là " + maxVal + " tại vị trí [" + maxRow + "][" + maxCol + "]");
            break;
        case 5:
            let rowIndex = parseInt(prompt("Nhập số hàng để tính trung bình: "));
            if (rowIndex >= 0 && rowIndex < rows) {
                let sumRow = 0;
                for (let j = 0; j < cols; j++) {
                    sumRow += arr[rowIndex][j];
                }
                console.log("Trung bình cộng hàng " + rowIndex + " là: " + (sumRow / cols));
            } else {
                console.log("Hàng không hợp lệ, vui lòng nhập lại!");
            }
            break;
        case 6:
            arr.reverse();
            for (let i = 0; i < rows; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}
