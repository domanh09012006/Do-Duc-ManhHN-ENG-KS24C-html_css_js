let number = +prompt("Nhap vao 1 so nguyen: ")
let str = ""
for (let i = 0; i <= number; i++) {
    if(number % i === 0){
        str = str + i +" ,"
    }
}
alert("Cac uoc cua so vua nhap la: " + str)