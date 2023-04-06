

// HÀM TÍNH ĐIỂM TRUNG BÌNH
function tinhDiemTrungBinh(toan, ly, hoa) {
    var diemTrungBinh = (toan + ly + hoa) / 3;
    return diemTrungBinh.toFixed(2); // làm tròn đến 2 chữ số sau dấu phẩy
}

// HÀM XẾP LOẠI CHO SINH VIÊN
function xepLoai(dtb) {
    var xepLoaiSV = "";
    if (dtb > 9) {
        console.log("Học sinh đạt loại Xuất sắc");
        xepLoaiSV ="Xuất Sắc";
    } else if (dtb >= 8 && dtb < 9) {
        xepLoaiSV="Giỏi";
        console.log("Học sinh đạt loại Giỏi");
    } else if (dtb >= 7 && dtb < 8) {
        xepLoaiSV="Khá";
        console.log("Học sinh đạt loại Khá");
    } else if (dtb >= 6 && dtb < 7) {
        xepLoaiSV="Trung Bình Khá";
        console.log("Học sinh đạt loại Trung Bình Khá");
    } else if (dtb >= 5 && dtb < 6) {
        xepLoaiSV="Trung Bình";
        console.log("Học sinh đạt loại Trung Bình");
    } else {
        xepLoaiSV="Yếu";
        console.log("Học sinh đạt loại Yếu")
    }
    return xepLoaiSV;
}

// HÀM KIỂM TRA ĐIỂM NHẬP VÀO CÓ HỢP LỆ KHÔNG
function ktThongSo(toan, ly, hoa) {
    if (toan >= 0 && toan <=10 && ly >= 0 && ly <=10 &&hoa >= 0 && hoa <=10) {
        return true;
    }else{
        return false;
    }
}

//HÀM ẨN LỖI
function hienErro(){
    var errorDiv = document.querySelector('.sv-erro');
    errorDiv.classList.remove('d-none');
}
// HÀM HIỆN LỖI
function anErro(){
    var errorDiv = document.querySelector('.sv-erro');
    if(!errorDiv.classList.contains('d-none')){
        errorDiv.classList.add('d-none');
    }
}


// HÀM KHỞI CHẠY BẰNG SỰ KIỆN ONCLICK BUTTON
function tinhDiem() {
    var math = parseFloat(document.getElementById("math").value);
    console.log("Điểm toán "+math);    
    var physics = parseFloat(document.getElementById("physics").value);
    console.log("Điểm lý "+physics);  
    var chemistry = parseFloat(document.getElementById("chemistry").value);
    console.log("Điểm hóa "+chemistry);      
    var check = ktThongSo(math,physics,chemistry);
    
    
    if(!check){
        hienErro();
        alert("Có thông số không hợp lệ vui lòng nhập lại");
        console.log("CÓ THÔNG SỐ KHÔNG HỢP LỆ. MỜI BẠN NHẬP LẠI"); 
        document.querySelector('.diemtb').innerHTML = "";
        document.querySelector('.xeploai').innerHTML = "";
    }else{
        anErro();
        var DiemTrungBinh = tinhDiemTrungBinh(math, physics, chemistry)
        document.querySelector('.diemtb').innerHTML = DiemTrungBinh;
        console.log("Điểm trung bình của sinh viên: " +DiemTrungBinh) ;       
        var xepLoaiSV = xepLoai(DiemTrungBinh);
        document.querySelector('.xeploai').innerHTML = xepLoaiSV; 
    }
    
}