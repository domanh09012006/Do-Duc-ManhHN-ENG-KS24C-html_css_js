let arr = []
let check = 0
let count = 0
let temp = 0
let max = 0
while(check<1){
    for(let i = 0; i<=9; i++){
        let input = +prompt("Nhap cac phan tu khac nhau vao mang: ")
        arr.push(input)
        if(arr.includes(input)){
            count++
        }
    }
    if(count<1){
        alert("Cac phan tu khong duoc giong nhau.Vui long nhap lai!")
    }else{
        check++
    }
}
for(let i=0; i<10; i++){
    if(arr[i]>max){
        max = arr[i]
        temp = i;
    }
}
alert("So lon nhat trong mang la: "+ max +"<br> O vi tri "+ temp)
