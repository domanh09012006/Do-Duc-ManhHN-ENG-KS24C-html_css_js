let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirmPass");
let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault(); // Chặn form load lại trang

    let emailValue = email.value;
    let passwordValue = password.value;
    let confirmPassValue = confirmPass.value;
    if (emailValue === "") {
        alert("Email không được bỏ trống!");
        return;
    }
    if (passwordValue === "") {
        alert("Mật khẩu không được bỏ trống!");
        return;
    }
    if (confirmPassValue !== passwordValue) {
        alert("Mật khẩu nhập lại không trùng khớp!");
        return;
    }
    
    localStorage.setItem(emailValue, JSON.stringify(passwordValue ));

    alert("✅ Đăng ký thành công!");
});