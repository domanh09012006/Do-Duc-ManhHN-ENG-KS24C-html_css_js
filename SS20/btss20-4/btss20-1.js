let str = prompt("Nhập vào 1 chuỗi bất kì: ")
let character = prompt("Nhập vào kí tự cần tìm kiếm trong chuỗi vừa nhập: ")
let Length = str.length
for(let i=0; i<Length; i++ ){
    // if(str.lastIndexOf(character)>0){
    //     alert("Từ tìm kiếm có tồn tại")
    //     break;
    // }else{
    //     alert("từ tìm kiếm ko tồn tại")
    //     break;
    // }
    if(str[i] == character){
        alert("Từ tìm kiếm có tồn tại!")
        break;
    }else{
        alert("Từ tìm kiếm không tồn tại!")
        break;
    }
}