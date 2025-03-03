let choice = +prompt("Nhập vào đơn vị tiền tệ bạn muốn chuyển: 1.USD->VNĐ  2.VNĐ->USD");
switch (choice) {
    case 1:// USD->VNĐ
        let moneyUSD = +prompt("Nhập vào số tiền: ");
        if (moneyUSD < 0) {
            alert("Số tiền không được âm!");
        } else {
            moneyUSD = moneyUSD * 23000;
            alert("Chuyển sang tiền VNĐ là: " + moneyUSD);
        }
        break;
    case 2: //VNĐ->USD
        let moneyVNĐ = +prompt("Nhập vào số tiền: ");
        if (moneyVNĐ < 0) {
            alert("Số tiền không được âm!");
        } else {
            moneyVNĐ = moneyVNĐ / 23000;
            alert("Chuyển sang tiền USD là: " + moneyVNĐ + "$");
        }
        break;
    default:
        alert("Không có trường hợp này!");
        break;
}