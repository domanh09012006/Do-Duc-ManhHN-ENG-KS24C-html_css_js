const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employe:[
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};
console.log(company.name)
console.log("Danh sách nhân viên:");
company.employe.forEach(employee => {
    console.log(employee.name);
})