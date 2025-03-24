document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form tải lại trang

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Lấy danh sách user từ localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(item => item.email === email && item.password === password);

    if (user) {
        window.location.href = "https://portal.rikkei.edu.vn/dangnhap";
    } else {
        alert("Email hoặc mật khẩu không đúng.");
    }
});