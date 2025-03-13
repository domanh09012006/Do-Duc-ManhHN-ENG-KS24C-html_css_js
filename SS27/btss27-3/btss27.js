let radius, num1, num2;
let choice;
let loop = true;
let menu = `
------ MENU ------
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.

Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            console.log("Dien tich hinh tron la:: ",sCircle(radius))
            break;
        case 2:
            console.log("Chu vi hinh tron la: ",cCircle(radius))
            break;
        case 3:
            console.log("Dien tich hinh chu nhat la: ",sRectangle(num1, num2))
            break;
        case 4:
            console.log("Chu vi hinh chu nhat la: ",cRectangle(num1, num2))
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
function sCircle(bankinh){
    let check = 0;
    while(check<1){
        bankinh = +prompt("Nhap ban kinh hinh tron: ")
        if(bankinh<0 || !Number.isInteger(bankinh)){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return bankinh*bankinh*3.1415
    
}
function cCircle(bankinh){
    let check = 0;
    while(check<1){
        bankinh = +prompt("Nhap ban kinh hinh tron: ")
        if(bankinh<0 || !Number.isInteger(bankinh)){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return bankinh*2*3.1415
    
}
function cRectangle(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap chieu dai:")
        num2 = +prompt("Nhap chieu rong: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1<=0 || num2<=0){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return (num1+num2)*2
}
function sRectangle(num1, num2) {
    let check = 0
    while (check < 1) {
        num1 = +prompt("Nhap chieu dai:")
        num2 = +prompt("Nhap chieu rong: ")
        if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1<=0 || num2<=0){
            alert("Du lieu khong hop le!")
        }else{
            check++
        }
    }
    return num1*num2
}