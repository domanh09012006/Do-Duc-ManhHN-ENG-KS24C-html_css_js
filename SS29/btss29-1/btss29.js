const contact = [
    {
        id: 1,
        name: "Do Duc Manh",
        email: "dmanh@gmail.com",
        phone: "0987654321",
    },
    {
        id: 2,
        name: "Doan The Tung",
        email: "ttung@gmail.com",
        phone: "0123456789",
    },
    {
        id: 3,
        name: "Do Tien Dat",
        email: "tdat@gmail.com",
        phone: "0567891234",
    },
];

// B2: Xay dung menu
let menu = `
--------MENU--------
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6Thoát.

Moi ban nhap lua chon: 

`;

// B3: Hien thi menu va cho nguoi dung nhap su lua chon
let input;
while (input !== 6) {
    input = +prompt(menu)
    switch (input) {
        case 1:
            let name = prompt("Nhap ten : ")
            let email = prompt("Nhap email: ")
            let phone = prompt("Nhap vao so dien thoai: ")
            let book = {
                id: Math.random(),
                name,
                email,
                phone,
            };
            contact.push(book);
            console.log(contact)
            break;
        case 2:
            display();
            break;
        case 3:
            let searchPhoneNumber = prompt("Nhap so dien thoai can tim kiem: ")
            let findIndex = search("phone", searchPhoneNumber)
            if (findIndex === -1) {
                console.log("Khong lien he nao co so dien thoai nhu tren: " + searchPhoneNumber)
            } else {
                displayOneContact(contact[findIndex], findIndex)
            }
            break;
        case 4:
            let searchID = +prompt("Nhap vao ID nguoi dung muon cap nhat: ");
            let updateIndex = search("id", searchID)
            if (updateIndex === -1) {
                console.log("Khong tim thay sach co ID nhu tren!")
            } else {
                contact[updateIndex].name = prompt("Moi ban nhap vao ten can cap nhat: ")
                contact[updateIndex].email = prompt("Moi ban nhap vao email cap nhat: ")
                contact[updateIndex].phone = prompt("Moi ban nhap vao sđt cap nhat: ")
                displayOneContact(contact[updateIndex], updateIndex)
            }
            break;
        case 5:
            let deleteID = +prompt("Nhap ID lien he can xoa: ");
            let deleteIndex = search("id", deleteID);
            if (deleteIndex === -1) {
                console.log("Khong tim thay lien he voi ID tren");
            } else {
                contact.splice(deleteIndex, 1);
                console.log("Da xoa thanh cong lien he:" + deleteID);
            }
            break;
        case 6:
            console.log("Kết thúc chương trình. Cảm ơn !!!!!");
            break;
        default:
            console.log("Lua chon khong hop le! Vui long nhap lai!")
            break;
    }
}
function display() {
    contact.forEach(function (book, index) {
        console.log(`Lien he ${+index + 1}:`);
        console.log("ID Nguoi dung: ", book.id);
        console.log("Ten lien he: ", book.name);
        console.log("Email lien he: ", book.email);
        console.log("So dien thoai: ", book.phone);
        console.log("----------------------------")
    })
}

function displayOneContact(book, index) {
    console.log(`Lien he ${+index + 1}:`);
    console.log("ID Nguoi dung: ", book.id);
    console.log("Ten lien he: ", book.name);
    console.log("Emai lien he: ", book.email);
    console.log("So dien thoai: ", book.phone);
    console.log("----------------------------")
}
function search(key, value) {
    let findIndex = -1
    for (let i in contact) {
        if (contact[i][key] === value) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}