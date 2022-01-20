function LayLoaiXe() {
    var ketqua;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;

    if (uberX) {
        ketqua = 'uberX';
    } else if (uberSUV) {
        ketqua = 'uberSUV';

    } else if (uberBlack) {
        ketqua = 'uberBlack';
    }
    return ketqua;
}

function TinhTien() {

    // Lấy giá trị người dùng nhập vào
    var laySoKM = document.getElementById('soKM').value;
    laySoKM = parseFloat(laySoKM);

    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);

    var divThanhTien = document.getElementById('divThanhTien');
    divThanhTien.style.display = 'block';
    var spanTien = document.getElementById('xuatTien');


    var loaiXe = LayLoaiXe();
    var thanhTien = 0;

    switch (loaiXe) {

        case 'uberX':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 8000 + layThoiGianCho * 2000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = 1 * 8000 + (laySoKM - 1) * 12000 + layThoiGianCho * 2000;
            } else if (laySoKM > 20) {
                thanhTien = 1 * 8000 + 19 * 12000 + (laySoKM - 20) * 10000 + layThoiGianCho * 2000;
            }



            break;

        case 'uberSUV':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 9000 + layThoiGianCho * 3000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = 1 * 9000 + (laySoKM - 1) * 14000 + layThoiGianCho * 3000;
            } else if (laySoKM > 20) {
                thanhTien = 1 * 9000 + 19 * 14000 + (laySoKM - 20) * 12000 + layThoiGianCho * 3000;
            }



            break;

        case 'uberBlack':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 10000 + layThoiGianCho * 4000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = 1 * 10000 + (laySoKM - 1) * 16000 + layThoiGianCho * 4000;
            } else if (laySoKM > 20) {
                thanhTien = 1 * 10000 + 19 * 16000 + (laySoKM - 20) * 14000 + layThoiGianCho * 4000;
            }



            break;


    }
    spanTien.innerHTML = thanhTien;
}