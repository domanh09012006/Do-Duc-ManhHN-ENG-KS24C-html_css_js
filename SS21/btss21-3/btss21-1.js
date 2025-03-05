let password = "01234"
let check=1
while(check<2){
    let intpass = prompt("Nhap vao mat khau: ")
    if(intpass == password ){
        check++
    }else{
        alert("Sai roi! Vui long nhap lai mat khau!")
    }
}
alert("Mat khau chinh xac!")