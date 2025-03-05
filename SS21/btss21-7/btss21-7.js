let check = 1
while (check < 2) {
    let bankDeposit = +prompt("Nhap so tien gui: ")
    let interestRate = +prompt("Nhap vao lai suat(%): ")
    let month = +prompt("Nhap vao so thang gui: ")
    let interest=1
    let totalAmount=0
    if(bankDeposit <= 0 || Number.isInteger(bankDeposit) === false){
        alert("So tien gui nhap vao khong hop le!")
    }else if(interestRate < 0 || Number.isInteger(interestRate) === false){
        alert("Lai suat nhap vao khong hop le!")
    }else if(month <= 0 || Number.isInteger(month) === false){
        alert("So thang gui nhap vao khong hop le!")
    }else{
        interest = bankDeposit*((interestRate/100)/12)*month
        totalAmount = bankDeposit + interest
        alert("Tien lai :" + interest + "Tong so tien nhan duoc: "+ totalAmount)
        check++
    }
}
