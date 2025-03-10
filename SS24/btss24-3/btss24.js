let arr = [];
let choice;
let loop = true, max = 0, min = 0, sum = 0, average = 0
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
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
            let temp = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i]
                    temp = i
                }
            }
            console.log("Gia tri lon nhat trong mang la: " + max + " Tai vi tri thu: " + temp + 1)
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 0) {
                    sum += arr[i]
                }
            }
            average = sum / arr.length
            console.log("Tong cua cac so duong trong mang la: " + sum + " va trong binh cong cua chung la: " + average)
            break;
        case 5:
            let reverse = ""
            for (let i = arr.length - 1; i >= 0; i--) {
                reverse = reverse + arr[i] + ", "
            }
            console.log("Mang sau khi dao nguoc la: " + reverse)
            break;
        case 6:
            let check = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i])
                    check = false;
            }
            if (check) {
                console.log("Mang la mang doi xung!")
            } else {
                console.log("MaNG KHONG PHAI MANG DOI XUNG")
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