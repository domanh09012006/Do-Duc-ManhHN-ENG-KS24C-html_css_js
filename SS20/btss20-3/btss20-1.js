let number = Number(prompt("Nhập vào 1 số: "))
if(Number.isInteger(number) === true){
    number = number.toLocaleString();
    for(let i=0; i<number.length; i++){
        if(number[i] === number[number.length - i - 1]){
            alert("Số vừa nhập là số đối xứng!");
            break;
        }else{
            alert("Số vừa nhập không là số đối xứng!");
            break;
        }
    }
}else{
    alert("Chuỗi vừa nhập không hợp lệ!")
}