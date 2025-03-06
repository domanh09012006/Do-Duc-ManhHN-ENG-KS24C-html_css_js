let arr = [2, 4, 6, 7, 9]
let count = arr.length;
let number = +prompt("Mời bạn nhaapoj và 1 số bất kì: ")
let check = 1
for (let i = 0; i < count; i++) {
    if (arr[i] === number ) {
        check++;
    }
}
if (check > 1) {
    alert("Bingo!")
} else {
    alert("Chúc bạn may mắn lần sau!")
}