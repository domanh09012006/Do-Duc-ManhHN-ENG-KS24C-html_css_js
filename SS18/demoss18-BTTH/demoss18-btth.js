// let salary = +prompt("Nhập mức thu nhập hàng tháng: ")
// if( salary < 5000000){
//     salary = salary * 0/100;
//     salary = salary.toLocaleString("vi - VN");
//     alert("Thuế phải trả: " + salary)
// }else if(salary<10000000 && salary>5000000 ){
//     salary = salary * 0.05;
//     salary = salary.toLocaleString("vi - VN");
//     alert("Thuế phải trả: " + salary);
// }
// else if(salary<18000000 && salary>10000000 ){
//     salary = salary * 0.1;
//     salary = salary.toLocaleString("vi - VN");
//     alert("Thuế phải trả: " + salary);
// }
// else if(salary<32000000 && salary>18000000 ){
//     salary = salary * 0.15;
//     salary = salary.toLocaleString("vi - VN");
//     alert("Thuế phải trả: " + salary);
// }
// else if(salary>32000000 ){
//     salary = salary * 0.2;
//     salary = salary.toLocaleString("vi - VN");
//     alert("Thuế phải trả: " + salary + "VNĐ");
// }


let codeHTTP = +prompt("Nhập vào mã trạng thái http: ")
let key = 1;
switch(codeHTTP){
    case 200:
        alert("Thành công");
        break;
    case 201:
        alert(" Thêm thành công");
        break;
    case 400:
        alert("Lỗi requets");
        break;
    case 404:
        alert("Không tìm thấy");
        break;
    case 500:
        alert("Lỗi sever");
        break;
    default:
        alert("Khồng xác định");
        break;
}