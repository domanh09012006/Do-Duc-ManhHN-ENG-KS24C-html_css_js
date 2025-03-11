let str = prompt("Nhap vao chuoi ki tu: ")
function upperCase(str) {
    str = str.toLowerCase()
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
            str[i] = str[i].toUpperCase();
        }
    }
    str = str.join("");
    console.log(str);
}
upperCase(str);