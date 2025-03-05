let sole = 0;
let sochan = 0;
for(let i=0; i<5; i++){
    let num = +prompt("Nhap vao so nguyen: ")
    if(num % 2 === 0){
        sochan++
    }else{
        sole++
    }
}
alert("So cac so chan va so le trong chuoi lan luot la: " + sochan +" va "+ sole )