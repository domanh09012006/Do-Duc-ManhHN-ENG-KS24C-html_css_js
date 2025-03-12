let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]
if (!Array.isArray(arr)) {
    console.log("Khong phai mang")
}
if (arr.length === 0) {
    console.log("Mang khong co phan tu!")
} else {
    let newArr = arr.filter(email => email.includes('@') && !email.includes(' '))
    console.log(newArr)
}