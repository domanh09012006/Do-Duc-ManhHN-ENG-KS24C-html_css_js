let arr = []
let check = 0
let int = 0
while (check < 1) {
    let count = +prompt("Nhap vao so phan tu cua mang: ")
    if (count < 0) {
        alert("So luong phan tu khong hop le!")
    } else if (count === 0) {
        alert("Mang khong co phan tu!")
    } else {
        for (let i = 0; i < count; i++) {
            let input = +prompt("Nhap vao cac phan tu cua mang: ")
            arr.push(input)
            if(Number.isInteger(input) === true && input<0){
                int++
            }
        }
        check++
    }
}
alert("SO CAC SO NGUYEN AM TRONG MANG LA: "+ int)


