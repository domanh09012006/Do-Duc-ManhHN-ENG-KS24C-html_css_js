let arr = [];
let choice;
let loop = true, max = 0, min = 100, sum = 0
let menu = `
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
============================================

Lựa chọn của bạn :
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập số phần tử:");
            if (count < 0) {
                console.log("Số phần tử không được nhỏ hơn 0");
            } else {
                arr = [];
                for (let i = 0; i < count; i++) {
                    let value = +prompt("Mời nhập phần tử thứ " + (i + 1) + ":");
                    arr.push(value);
                }
                console.log("Đã nhập mảng thành công:", arr);
            }
            break;
        case 2:
            
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }
            }
            break;
        case 3:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i]
                }
                if (arr[i] < min) {
                    min = arr[i]
                }
            }
            console.log("Gia tri lon nhat trong mang la: " + max)
            console.log("Gia tri nho nhat trong mang la: " + min)
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            console.log("Tong gia tri cac phan tu trong mang la:" + sum)
            break;
        case 5:
            let nth = 0;
            let find = +prompt("Nhap ga tri: ")
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === find) {
                    nth++
                }
            }
            console.log("So lan xua hien cua " + find + " trong mang la " + nth + " lan.")
            break;
        case 6:
            arr.sort((a, b) => a - b);
            let result = "";
            for (let i = 0; i < arr.length; i++) {
                result += arr[i] + " ";
            }
            console.log("Mảng sau khi sắp xếp tăng dần: " + result);
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