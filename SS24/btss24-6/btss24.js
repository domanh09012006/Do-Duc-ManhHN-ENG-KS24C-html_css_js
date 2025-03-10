let choice, str, arr
let loop = true
let menu = `
================== MENU ===================
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
============================================

Lựa chọn của bạn :
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhạp vào 1 dãy số bất kì: ")
            arr = str.split("")
            break;
        case 2:
            console.log(str)
            break;
        case 3:
            let length = str.length
            console.log("Do dai cua chuoi vua nhap la: " + length)
            break;
        case 4:
            let nth = 0
            let count = prompt("Nhap ki tu can tim: ")
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === count) {
                    nth++
                }
            }
            console.log("Ki tu " + count + " xuat hien " + nth + " lan trong mang")
            break;
        case 5:
            let check = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i])
                    check = false;
            }
            if (check) {
                console.log("Chuoi la mang doi xung!")
            } else {
                console.log("Chuoi khong phai chuoi doi xung1")
            }
            break;
        case 6:
            str = str.toLowerCase().split("");
            for (let i = 0; i < str.length; i++) {
                if (i === 0 || str[i - 1] === " ") {
                    str[i] = str[i].toUpperCase();
                }
            }
            str = str.join("");
            console.log(str);
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