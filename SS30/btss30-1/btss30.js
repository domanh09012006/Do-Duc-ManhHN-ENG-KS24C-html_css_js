let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];

let cart = [];
let menu = `
--------MENU--------
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập ID sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.

Mời bạn nhập lựa chọn: 
`;

let input;
while (input !== 5) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let findIndex = prompt("Nhập danh mục sản phẩm: ");
            for (let i in products) {
                if (products[i].category === findIndex) {
                    console.log("ID:" + products[i].id);
                    console.log("Tên sản phẩm:" + products[i].name);
                    console.log("Giá:" + products[i].price);
                    console.log("Số lượng:" + products[i].quantity);
                    console.log("Danh mục:" + products[i].category);
                    console.log("-----------------------------");
                }
            }
            break;
        case 2:
            let productId = +prompt("Nhập ID sản phẩm muốn mua: ");
            let product = products.find(p => p.id === productId);
            if (!product) {
                console.log("Sản phẩm không tồn tại!");
                break;
            }
            let buyQuantity = +prompt("Nhập số lượng muốn mua: ");
            if (buyQuantity <= 0 || buyQuantity > product.quantity) {
                console.log("Số lượng không hợp lệ!");
                break;
            }
            let cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity += buyQuantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: buyQuantity
                });
            }
            product.quantity -= buyQuantity;
            console.log("Đx thêm vào giỏ hàng");
            break;
        case 3:
            let choice = 0;
            while (choice < 1) {
                let sortPrice = +prompt(
                    `Sắp xếp sản phẩm trong cửa hàng theo giá: 
                    1. Tăng dần 
                    2. Giảm dần`
                );
                if (sortPrice === 1) {
                    choice++;
                    products.sort((a, b) => a.price - b.price);
                    display();
                    console.log("Hoàn tất sắp xếp tăng dần");
                } else if (sortPrice === 2) {
                    choice++;
                    products.sort((a, b) => b.price - a.price);
                    display();
                    console.log("Hoàn tất sắp xếp giảm dần");
                } else {
                    console.log("Giá trị không hợp lệ!");
                }
            }
            break;
        case 4:
            let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
            console.log("Tổng số sản phẩm đã mua: " + totalItems);
            console.log("Tổng số tiền phải thanh toán: " + totalPrice);
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}

function display() {
    products.forEach((product, index) => {
        console.log(`Sản phẩm ${index + 1}:`);
        console.log("ID:", product.id);
        console.log("Tên:", product.name);
        console.log("Giá:", product.price);
        console.log("Danh mục:", product.category);
        console.log("Số lượng:", product.quantity);
        console.log("----------------------------");
    });
}
