let modal = document.getElementById("modal");
let openModal = document.getElementById("openModal");
let closeModal = document.querySelector(".close");

openModal.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});