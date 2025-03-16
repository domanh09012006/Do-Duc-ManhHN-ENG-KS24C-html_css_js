let employees = [];
let choice;
let loop = true;
let menu = `
------ MENU ------
1.Thêm nhân viên mới.
2.Xóa nhân viên theo id.
3.Cập nhật mức lương của nhân viên theo id
4Tìm kiếm nhân viên theo tên.
5.Thoát

Lựa chọn của bạn là gì?
`;

while (loop) {
    choice = +prompt(menu);


    switch (choice) {
        case 1: // Thêm nhân viên
            let id = prompt("Nhập ID:");
            let name = prompt("Nhập tên:");
            let position = prompt("Nhập vị trí:");
            let salary = Number(prompt("Nhập lương:"));
            employees[employees.length] = { id: id, name: name, position: position, salary: salary };
            console.log("Đã thêm nhân viên: " + name);
            break;

        case 2:
            let deleteId = prompt("Nhập ID nhân viên cần xóa:");
            let index = -1;
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id === deleteId) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                let confirmDelete = confirm("Bạn có chắc muốn xóa nhân viên " + employees[index].name + "?");
                if (confirmDelete) {
                    for (let i = index; i < employees.length - 1; i++) {
                        employees[i] = employees[i + 1];
                    }
                    employees.length--;
                    console.log("Nhân viên đã được xóa.");
                } else {
                    console.log("Hủy xóa nhân viên.");
                }
            } else {
                console.log("Không tìm thấy nhân viên có ID: " + deleteId);
            }
            break;

        case 3:
            let updateId = prompt("Nhập ID nhân viên cần cập nhật lương:");
            let found = false;
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id === updateId) {
                    let newSalary = Number(prompt("Nhập lương mới:"));
                    employees[i].salary = newSalary;
                    console.log("Đã cập nhật lương cho " + employees[i].name + ": " + newSalary);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Không tìm thấy nhân viên có ID: " + updateId);
            }
            break;

        case 4:
            let searchName = prompt("Nhập tên nhân viên cần tìm:");
            let foundSearch = false;
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1) {
                    console.log("ID: " + employees[i].id + ", Tên: " + employees[i].name + ", Vị trí: " + employees[i].position + ", Lương: " + employees[i].salary);
                    foundSearch = true;
                }
            }
            if (!foundSearch) {
                console.log("Không tìm thấy nhân viên nào có tên: " + searchName);
            }
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn !!!!!");
            loop = false;
            break;
    }
}