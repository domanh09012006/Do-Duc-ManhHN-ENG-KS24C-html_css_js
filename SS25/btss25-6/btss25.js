let str = prompt("Nhap vao chuoi ki tu: ")
function palindrome(str) {
    let arr = str.split("")
    let check = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i])
            check = false;
    }
    if (check) {
        console.log("Chuoi la chuoi doi xung!")
    } else {
        console.log("Chuoi khong phai chuoi doi xung1")
    }
}
palindrome(str)
