let year = +prompt("Nhập vào số năm kinh nghiệm của nhân viên: ")
if(year >= 6){
    alert("Quản lý!")
}else if(year<6 && year>=4){
    alert("Chuyên viên!")
}else if(year<4 && year>=1){
    alert("Nhân viên có kinh nghiệm!")
}else if(year<1){
    alert("Mới vào nghề!")
}else{
    alert("Không có trường hợp này!")
}