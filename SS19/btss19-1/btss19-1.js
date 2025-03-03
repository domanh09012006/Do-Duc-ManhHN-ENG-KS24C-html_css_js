// let month = +prompt("Nhập vào tháng: ")
// if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     alert("Tháng này có 31 ngày!");
// }else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     alert("Tháng có 30 ngày!");
// }else if (month === 2) {
//     let year = parseInt(prompt("Nhập vào năm: "));
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         alert("Tháng có 29 ngày!")
//     }else{
//         alert("Tháng có 28 ngày")
//     }
// }else{
//     alert("Tháng khong hợp lệ!")
// }

let month = +prompt("Nhập vào tháng: ")
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Tháng có 31 ngày!")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Tháng có 30 ngày!")
        break;
    case 2:
        let year = parseInt(prompt("Nhập vào năm: "));
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert("Tháng có 29 ngày!")
        } else {
            alert("Tháng có 28 ngày")
        }
        break;
    default:
        alert("Tháng không hợp lệ!")
        break;
}