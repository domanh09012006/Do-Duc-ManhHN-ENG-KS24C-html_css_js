let character = prompt("Nhập vào 1 kí tự: ")
if (character.length > 1) {
    alert("Chỉ được nhập 1 kí tự!")
} else {
    if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
        alert("Kí tự nhập vào là chữ cái!")
    } else {
        alert("Kí tự nhập vào không phải là chữ cái!")
    }
}
