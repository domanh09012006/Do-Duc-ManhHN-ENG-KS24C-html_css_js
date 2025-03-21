function checkEmail() {
    let email = document.getElementById("email").value
    let result = document.getElementById("result");
    if (email.includes("@") && email.includes(".com")) {
        result.textContent = "Email hợp lệ!";
        result.style.color = "green";
    } else {
        result.textContent = "Email không hợp lệ!";
        result.style.color = "red";
    }
}