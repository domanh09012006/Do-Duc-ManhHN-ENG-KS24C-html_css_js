let arr = [];
let choice;
let loop = true, max, even = "", odd = "", sum = 0, delet = 0, secondmax
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
                if (arr[i] % 2 === 0) {
                    even = even + arr[i] + " "
                } else {
                    odd = odd + arr[i] + " "
                }
            }
            console.log("Cac so chan trong mang la: " + even)
            console.log("Cac so le trong mang la: " + odd)
            break;
        case 4:
            for (let i = 0; i < arr.length; i++) {
                sum = sum + arr[i]
            }
            let average = sum / arr.length
            console.log("Trung binh cong cac phan tu trong mang la: " + average)
            break;
        case 5:
            delet = +prompt("Nhap vao vi tri muon xoa trong mang: ")
            arr.splice(delet, 1)
            break;
        case 6:
            if (arr.length < 2) {
                console.log("Mang co it hon 2 phan tu!")
            } else {
                max = 0, secondmax = 0
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) {
                        secondmax = max;
                        max = arr[i]
                    } else if (arr[i] > secondmax && arr[i] !== max) {
                        secondmax = arr[i]
                    }
                }
                console.log("So lon thu 2 trong mang la: " + secondmax)
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