let arr = []
let check = 0
for(let i=0; i<=9; i++){
    let input = +prompt("Nhap lan luot cac phan tu vao mang")
    arr.push(input)
}
let str = ""
for(let i = 0; i<=9; i++){
    if(arr[i]>=10){
        check++
        str = str + arr[i] + " "
    }
}
if(check>0){
    alert(str)
}else{
    alert("Khong co so nao lon hon 10!")
}
