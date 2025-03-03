let number = +prompt("Nhập vào 1 số nguyên dương: ");
if (number < 0) {
    alert("Hãy nhập số nguyên dương!")
} else {
    if (number % 3 === 0 && number % 5 === 0) {
        alert(number + " Chia hết cho cả 3 và 5!")
    } else if (number % 3 === 0) {
        alert(number + "Chia hết cho 3!")
    } else if (number % 5 === 0) {
        alert(number + "Chia hết cho 5")
    } else {
        alert("Không chia hết cho cả 3 và 5")
    }
}