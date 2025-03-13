let arr = [];
let choice, sum = 0, avg = 0, maxEven = 0, minOdd = 100;
let loop = true;
let menu = `
------ MENU ------
1. Nhập danh sách số nguyên.
2.Tính trung bình các số.
3.Tìm số chẵn lớn nhất.
4.Tìm số lẻ nhỏ nhất.
5.Thoát.

Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Nhap so luong phan tu cho mang so nguyen: ")
            if(count>0){
                for(let i = 0; i<count;i++){
                    let input = +prompt("Nhap vao so nguyen thu "+ (i+1) +" : ")
                    if(!Number.isInteger(input)){
                        alert("Du lieu nhap vao khong hop le!")
                        i--;
                    }else{
                        arr.push(input)
                    }
                }
                alert("Nhap du lieu thanh cong!")
            }else{
                alert("Mang khong hop le!")
            }
            break;
        case 2:
            for(let i = 0; i<arr.length; i++){
                sum = sum + arr[i]
            }
            avg = sum/arr.length
            console.log("Trung binh cong cac so la: ", avg)
            break;
        case 3:
            let checkMax = 0;
            for(let i = 0; i<arr.length; i++){
                if(arr[i]%2 === 0){
                    checkMax++
                    if(arr[i]>maxEven){
                        maxEven = arr[i]
                    }
                }
            }
            if(checkMax>0){
                console.log("So chan lon nhat trong mang la: ",maxEven)
            }else{
                console.log("Mang khong chua so chan!")
            }
            
            break;
        case 4:
            let checkMin = 0;
            for(let i = 0; i<arr.length; i++){
                if(arr[i]%2 !== 0){
                    checkMin++
                    if(arr[i]<minOdd){
                        minOdd = arr[i]
                    }
                }
            }
            if(checkMin>0){
                console.log("So le nho nhat trong mang la: ",minOdd)
            }else{
                console.log("Mang khong chua so chan!")
            }
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}