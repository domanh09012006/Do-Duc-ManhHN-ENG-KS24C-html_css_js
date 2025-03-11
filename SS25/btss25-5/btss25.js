let arr = [4, 6.4, 2, 5.6, -1, 7]
function integer(arr){
    let index = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>0 && Number.isInteger(arr[i])===true){
            index++
        }
    }
    if(index>0){
        alert("Cac so nguyen duong trong mang la:"+ index)
    }else{
        alert("Trong mang khong chua so nguyen duong!")
    }
}
integer(arr)