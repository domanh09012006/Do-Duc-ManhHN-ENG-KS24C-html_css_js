const restaurant = [
    {
        id: 1,
        name: "Trứng rán",
        price: 10000,
        description: "Vàng giòn thơm mùi hành",
    },
    {
        id: 2,
        name: "Cơm rang",
        price: 30000,
        description: "Cơm chiên với lạp xưởng, tôm, trứng",
    },
    {
        id: 3,
        name: "Chả giò",
        price: 20000,
        description: "Chả giò nhân tôm thịt giòn rụm",
    },
];

let menu = `
--------MENU--------
1. Thêm món ăn.
2. Xóa món ăn theo tên.
3. Cập nhật thông tin món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ menu.
5. Tìm kiếm món ăn theo tên.
6. Thoát.

Mời bạn nhập lựa chọn: 
`;

let input;
while (input !== 6) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Nhập tên món ăn: ");
            let price = +prompt("Nhập giá món ăn: ");
            let description = prompt("Nhập mô tả món ăn: ");
            let newDish = {
                id: Math.floor(Math.random() * 10000),
                name,
                price,
                description
            };
            restaurant.push(newDish);
            console.log("Món ăn đã được thêm:", newDish);
            break;
        case 2:
            let deleteName = prompt("Nhập tên món ăn muốn xóa: ");
            let deleteIndex = restaurant.findIndex(dish => dish.name.toLowerCase() === deleteName.toLowerCase());
            if (deleteIndex !== -1) {
                restaurant.splice(deleteIndex, 1);
                console.log("Đã xóa món ăn:", deleteName);
            } else {
                console.log("Không tìm thấy món ăn để xóa!");
            }
            break;
        case 3:
            let updateName = prompt("Nhập tên món ăn muốn cập nhật: ");
            let updateIndex = restaurant.findIndex(dish => dish.name.toLowerCase() === updateName.toLowerCase());
            if (updateIndex !== -1) {
                let newName = prompt("Nhập tên mới: ");
                let newPrice = +prompt("Nhập giá mới: ");
                let newDescription = prompt("Nhập mô tả mới: ");
                
                restaurant[updateIndex].name = newName || restaurant[updateIndex].name;
                restaurant[updateIndex].price = newPrice;
                restaurant[updateIndex].description = newDescription || restaurant[updateIndex].description;
                
                console.log("Món ăn sau khi cập nhật:");
                displayOneDish(restaurant[updateIndex]);
            } else {
                console.log("Không tìm thấy món ăn!");
            }
            break;
        case 4:
            display();
            break;
        case 5:
            let searchName = prompt("Nhập tên món ăn cần tìm: ");
            let foundDishes = restaurant.filter(dish => dish.name.toLowerCase().includes(searchName.toLowerCase()));
            if (foundDishes.length > 0) {
                console.log("Kết quả tìm kiếm:");
                foundDishes.forEach(displayOneDish);
            } else {
                console.log("Không tìm thấy món ăn!");
            }
            break;
        case 6:
            console.log("Kết thúc chương trình. Cảm ơn!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}

function display() {
    console.log("Menu nhà hàng:");
    restaurant.forEach(displayOneDish);
}

function displayOneDish(dish) {
    console.log(`\nMón ăn: ${dish.name}`);
    console.log("Giá:", dish.price);
    console.log("Mô tả:", dish.description);
    console.log("----------------------------");
}
