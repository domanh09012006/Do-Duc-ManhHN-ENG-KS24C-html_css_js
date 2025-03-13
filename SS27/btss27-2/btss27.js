let array = [];
let loop = true;
let n = +prompt("Nhập số lượng sinh viên cho danh sách: ");
let menu = `
===== MENU QUẢN LÝ SINH VIÊN =====
1. Nhập thông tin sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên (theo tên)
4. Xóa sinh viên khỏi danh sách
5. Thoát
Lựa chọn của bạn là: `;

while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            if (n <= 0) {
                alert("Số lượng sinh viên không hợp lệ! Vui lòng nhập lại!");
            } else {
                for (let i = 0; i < n; i++) {
                    let fullName = prompt("Nhập họ và tên của sinh viên: ");
                    array.push(fullName);
                }
                alert("Nhập thông tin thành công");
            }
            break;

        case 2:
            if (array.length === 0) {
                alert("Danh sách sinh viên trống!");
            } else {
                alert("Danh sách sinh viên: \n" + array.join("\n"));
            }
            break;

        case 3:
            let searchName = prompt("Nhập tên sinh viên cần tìm:");
            let foundStudents = array.filter(name => name.toLowerCase() === searchName.toLowerCase());
            
            if (foundStudents.length > 0) {
                alert("Các sinh viên tìm thấy:\n" + foundStudents.join("\n"));
            } else {
                alert("Không tìm thấy sinh viên trong danh sách.");
            }
            break;

        case 4:
            let deleteName = prompt("Nhập tên sinh viên cần xóa:");
            let index = array.findIndex(name => name.toLowerCase() === deleteName.toLowerCase());
            
            if (index !== -1) {
                array.splice(index, 1);
                alert("Đã xóa sinh viên thành công!");
            } else {
                alert("Không tìm thấy sinh viên để xóa.");
            }
            break;

        case 5:
            alert("Kết thúc chương trình!!");
            loop = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
            break;
    }
}
