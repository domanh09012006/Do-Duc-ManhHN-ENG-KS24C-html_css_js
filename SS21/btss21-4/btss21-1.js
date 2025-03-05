let check = 1
while (check < 2) {
    let num1 = +prompt("Nhap vao he so a: ")
    let num2 = +prompt("Nhap vao he so b: ")
    let num3 = +prompt("Nhap vao he so c: ")
    let x1 = 0;
    let x2 = 0;
    if (Number.isInteger(num1) !== true || Number.isInteger(num2) !== true || Number.isInteger(num3) !== true) {
        alert("Gia tri nhap vao khong hop le!")
    } else {
        if (num1 === 0) {
            if (num2 === 0) {
                if (num3 === 0) {
                    alert("Phuong trinh vo so nghiem!")
                    check++
                } else {
                    alert("Phuong trinh vo nghiem!")
                    check++
                }
            } else {
                x1 = -num3 / num2
                alert("Phuong trinh co nghiem duy nhat x = " + x1)
                check++
            }
        } else {
            let delta = num2 * num2 - 4 * num1 * num3
            if (delta < 0) {
                alert("Phuong trinh vo nghiem")
                check++
            } else if (delta === 0) {
                x1 = -num2 / (2 * num1)
                alert("Phuong trinh co nghiem kep x1 = x2 = " + x1)
                check++
            } else if (delta > 0) {
                x1 = (-num2 + Math.sqrt(delta)) / (2 * num1)
                x2 = (-num2 - Math.sqrt(delta)) / (2 * num1)
                alert("Phuong trinh co 2 nghiem phan biet x1 = " + x1 + " va x2 = " + x2)
                check++
            }
        }
    }

}

