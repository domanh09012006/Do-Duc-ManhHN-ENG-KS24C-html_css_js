let num1, num2
let choice;
let loop = true;
let menu = `
------ MENU ------
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.

Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            console.log("Tong hai so la: ",sum(num1, num2))
            break;
        case 2:
            console.log("Hieu hai so la: ",hieu(num1, num2))
            break;
        case 3:
            console.log("Tich hai so la: ",tich(num1, num2))
            break;
        case 4:
            console.log("Thuong hai so la: ",thuong(num1, num2))
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}
function sum(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap so thu 1:")
        num2 = +prompt("Nhap so thu 2: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return num1+num2
}
function hieu(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap so thu 1:")
        num2 = +prompt("Nhap so thu 2: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return num1-num2
}
function tich(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap so thu 1:")
        num2 = +prompt("Nhap so thu 2: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2)){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return num1*num2
}
function thuong(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap so thu 1:")
        num2 = +prompt("Nhap so thu 2: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2) && num2 === 0){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return num1/num2
}