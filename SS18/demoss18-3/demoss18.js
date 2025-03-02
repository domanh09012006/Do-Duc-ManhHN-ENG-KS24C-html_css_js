let username = prompt("Nhập username:");
if (username === null || username === "") {
    alert("Cancelled");
} else if (username === "ADMIN") {
    let password = prompt("Nhập password:");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null || password === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don't know you");
}

