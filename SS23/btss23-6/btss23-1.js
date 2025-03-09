let arr = [false, true, NaN, null, undefined, 0, 3, 5, 2, "Hello", "hi", "ho"]
for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]) {
        arr.splice(i, 1);
    }
}
console.log(arr);