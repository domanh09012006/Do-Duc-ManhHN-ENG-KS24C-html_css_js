let str = "";
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự
7. Thoát chương trình
============================================
Lựa chọn của bạn :
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log("Chuỗi hiện tại: " + str);
            break;
        case 3:
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            break;
        case 4:
            let reversedStr = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversedStr += str[i];
            }
            console.log("Chuỗi đảo ngược: " + reversedStr);
            break;
        case 5:
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if ((i == 0 || str[i - 1] === " ") && str[i] !== " ") {
                    count++;
                }
            }
            console.log("Số lượng từ trong chuỗi: " + count);
            break;
        case 6:
            let find = prompt("Nhập ký tự cần tìm:");
            let replace = prompt("Nhập ký tự thay thế:");
            let newStr = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] === find) {
                    newStr += replace;
                } else {
                    newStr += str[i];
                }
            }
            str = newStr;
            console.log("Chuỗi sau khi thay thế: " + str);
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
    }
}
