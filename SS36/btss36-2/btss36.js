document.addEventListener("DOMContentLoaded", function () {
    const storedName = localStorage.getItem("userName");
    const nameForm = document.getElementById("nameForm");
    const greeting = document.getElementById("greeting");
    const userNameSpan = document.getElementById("userName");
    const nameInput = document.getElementById("nameInput");
    const saveButton = document.getElementById("saveButton");
    const changeButton = document.getElementById("changeButton");

    if (storedName) {
        showGreeting(storedName);
    }

    saveButton.onclick = function () {
        const name = nameInput.value;
        if (name) {
            localStorage.setItem("userName", name);
            showGreeting(name);
        }
    };

    changeButton.onclick = function () {
        nameForm.style.display = "block";
        greeting.style.display = "none";
    };

    function showGreeting(name) {
        userNameSpan.textContent = name;
        nameForm.style.display = "none";
        greeting.style.display = "block";
    }
});