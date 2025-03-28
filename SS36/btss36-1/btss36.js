document.addEventListener("DOMContentLoaded", function () {
    let foods = document.querySelectorAll(".food");

    foods.forEach((food, index) => {
        let numberSpan = food.querySelector(".number");
        let button = food.querySelector(".btn");

        let likes = localStorage.getItem(`food_${index}`) || 0;
        numberSpan.textContent = likes;

        button.onclick = function () {
            likes++;
            numberSpan.textContent = likes;
            localStorage.setItem(`food_${index}`, likes);
        };
    });
});