let math = +prompt("Nhập điểm môn toán: ")
let liter = +prompt("Nhập điểm môn văn: ")
let eng = +prompt("Nhập điểm môn anh: ")
let average = (math + liter + eng) / 3;
if(average >= 8 && average<=10){
    alert("Loại giỏi!")
}else if(average<=7.9 && average>=6.5){
    alert("Loại khá!")
}else if(average<=6.4 && average>=5){
    alert("Loại trung bình!")
}else if(average<=5 && average>=0){
    alert("Loại yếu!")
}else{
    alert("Không có trường hợp này!")
}
