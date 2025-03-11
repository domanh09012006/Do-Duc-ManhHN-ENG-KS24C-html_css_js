let password = prompt("Nhập vào mật khẩu để kiểm tra:");
function isStrongPassword(str) {
    let minLength = 8;
    if (str.length < minLength) {
        console.log("Mật khẩu phải có ít nhất 8 ký tự!");
    } else {
        let hasNumber = false;
        let hasLower = false;
        let hasUpper = false;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (!isNaN(char)) {
                hasNumber = true;
            } else if (char >= 'A' && char <= 'Z') {
                hasUpper = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLower = true;
            }
        }
        if (hasNumber && hasUpper && hasLower) {
            console.log("Mật khẩu an toàn");
        } else {
            console.log("Mật khẩu yếu");
        }
    }
}
isStrongPassword(password);
