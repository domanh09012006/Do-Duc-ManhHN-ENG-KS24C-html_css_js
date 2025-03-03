let result = "javascript" + 5;
console.log(result); // "javascript5" (Nối chuỗi)
result = "javascript" - 1;
console.log(result); // NaN (Chuỗi không phải số nên trừ bị lỗi)
result = "3" + 2;
console.log(result); // "32" (Nối chuỗi vì có chuỗi
result = "5" - 4;
console.log(result); // 1 (Chuỗi số được chuyển thành số)
result = isNaN("123");
console.log(result); // false ("123" là số hợp lệ)
result = isNaN("hello");
console.log(result); // true ("hello" không phải số)
result = Number.isNaN("123");
console.log(result); // false (Vì "123" không phải NaN)
result = Number.isNaN(NaN);
console.log(result); // true (NaN là NaN)