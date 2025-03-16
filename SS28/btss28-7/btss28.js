let students = [
    { name: "Trần Trí Dương", math: 9, english: 8, literature: 7 },
    { name: "Hà Bích Ngọc", math: 3, english: 2, literature: 5 },
    { name: "Bùi Thái Sơn", math: 9.5, english: 9, literature: 9 }
];
function topStudents(students) {
    return students.filter(student => 
        (student.math + student.english + student.literature) / 3 >= 8
    );
}
console.log(topStudents(students));
