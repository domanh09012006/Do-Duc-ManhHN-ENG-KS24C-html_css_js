let library = [
    {
        id: 1,
        name: "Dế Mèn phiêu lưu kí",
        price: 15000, quantity: 15,
        category: "Truyện ngắn"
    },
    {
        id: 2,
        name: "Tắt Đèn",
        price: 70000,
        quantity: 6,
        category: "Truyện ngắn"
    },
    {
        id: 3,
        name: "Conan",
        price: 22000,
        quantity: 15,
        category: "Truyện tranh"
    }
];

let cart = [];
let menu = `
--------MENU--------
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách
5. Sắp xếp sách theo giá (1: Tăng dần, 2: Giảm dần)
6. Tính tổng số lượng sách đã mua và tổng tiền
7. Hiển thị tổng số sách trong kho
8. Thoát chương trình
Mời bạn nhập lựa chọn: `;

let input;
while (input !== 8) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let findIndex = prompt("Nhập danh mục sản phẩm: ");
            for (let i in library) {
                if (library[i].category === findIndex) {
                    console.log("ID:" + library[i].id)
                    console.log("Ten san pham:" + library[i].name)
                    console.log("Gia:" + library[i].price)
                    console.log("So luong:" + library[i].quantity)
                    console.log("Danh muc:" + library[i].category)
                    console.log("-----------------------------")
                }
            }
            break;
        case 2:
            let name = prompt("Nhập tên sách: ");
            let price = +prompt("Nhập giá tiền: ");
            let quantity = +prompt("Nhập số lượng sách: ");
            let newCategory = prompt("Nhập thể loại: ");
            let newBook = {
                id: library.length + 1,
                name,
                price,
                quantity,
                category: newCategory
            };
            library.push(newBook);
            console.log("Thêm sách thành công!");
            break;
        case 3:
            let findBook = +prompt("Nhập id muốn tìm kiếm: ")
            for(let i in library){
                if(library[i].id === findBook){
                    console.log("ID:" + library[i].id)
                    console.log("Ten san pham:" + library[i].name)
                    console.log("Gia:" + library[i].price)
                    console.log("So luong:" + library[i].quantity)
                    console.log("Danh muc:" + library[i].category)
                    console.log("-----------------------------")
                }
            }
            break;
        case 4:
            let bookId = +prompt("Nhập ID sách muốn mua: ");
            let buyQuantity = +prompt("Nhập số lượng muốn mua: ");
            let bookToBuy = library.find(book => book.id === bookId);

            if (!bookToBuy) {
                console.log("Sách không tồn tại!");
                break;
            }

            if (bookToBuy.quantity < buyQuantity) {
                console.log("Không đủ số lượng trong kho!");
                break;
            }

            bookToBuy.quantity -= buyQuantity;

            let cartItem = cart.find(item => item.id === bookId);
            if (cartItem) {
                cartItem.quantity += buyQuantity;
            } else {
                cart.push({ id: bookToBuy.id, name: bookToBuy.name, price: bookToBuy.price, quantity: buyQuantity });
            }

            console.log("Mua sách thành công!");
            break;
        case 5:
            let sortOption = +prompt("1: Tăng dần, 2: Giảm dần");
            if (sortOption === 1) {
                library.sort((a, b) => a.price - b.price);
            } else if (sortOption === 2) {
                library.sort((a, b) => b.price - a.price);
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            display();
            break;
        case 6:
            let total = 0;
            let sumPrice = 0;
            for (let item of cart) {
                total += item.quantity;
                sumPrice += item.quantity * item.price;
            }
            console.log("Tổng số sách đã mua là: " + total);
            console.log("Tổng số tiền phải thanh toán là: " + sumPrice);
            break;
        case 7:
            let totalStock = 0;
            for (let book of library) {
                totalStock += book.quantity;
            }
            console.log("Tổng số sách còn lại trong kho là: "+ totalStock);
            break;

        case 8:
            console.log("Kết thúc chương trình. Cảm ơn!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
    }
}
function display() {
    library.forEach(book => displayOneBook(book));
}
function displayOneBook(book) {
    console.log(`ID: ${book.id}`);
    console.log(`Tên: ${book.name}`);
    console.log(`Giá: ${book.price}`);
    console.log(`Số lượng: ${book.quantity}`);
    console.log(`Thể loại: ${book.category}`);
    console.log("---------------------------");
}
