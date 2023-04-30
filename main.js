// bài tập 1
function XetKV(kv) {
    let score = 0;
    switch (kv) {
      case "A":
        score = 2;
        break;
      case "B":
        score = 1;
        break;
      case "C":
        score = 0.5;
        break;
      default:
        score = 0;
        break;
    }
    return score;
  }
  
  function XetDT(kv) {
    let score = 0;
    switch (kv) {
      case "1":
        score = 2.5;
        break;
      case "2":
        score = 1.5;
        break;
      case "3":
        score = 1;
        break;
      default:
        score = 0;
        break;
    }
    return score;
  }
  
  function XetDuyet(d1, d2, d3, tong, dc) {
    document.getElementById("tsResult").style = "";
    document.getElementById("tsResult").innerHTML = "";
    console.log(tong);
    if (d1 <= 0 || d2 <= 0 || d3 <= 0) {
      document.getElementById("tsResult").style =
        "background-color: #ffbbbb; color: red;border: 1px solid red;border-radius: 5px;padding: 10px; margin-bottom: 10px;";
      document.getElementById("tsResult").innerHTML =
        "CÓ ĐIỂM 0 - THÍ SINH TRƯỢT";
    } else {
      if (tong < dc) {
        document.getElementById("tsResult").style =
          "background-color: #ffbbbb; color: red;border: 1px solid red;border-radius: 5px;padding: 10px; margin-bottom: 10px;";
        document.getElementById("tsResult").innerHTML =
          "TÔNG ĐIỂM CỦA THÍ SINH: " +
          tong +
          " - ĐIỂM KHÔNG ĐẠT TIÊU CHUẨN,THÍ SINH TRƯỢT";
      } else {
        document.getElementById("tsResult").style =
          "background-color: #bbffbb;color: green;border: 1px solid green;border-radius: 5px;padding: 10px;margin-bottom: 10px;";
        document.getElementById("tsResult").innerHTML =
          "TÔNG ĐIỂM CỦA THÍ SINH: " + tong + " - THÍ SINH ĐỖ";
      }
    }
  }
  
  function DiemTong(d1, d2, d3, kv, dt) {
    document.getElementById("tsResult").style = "";
    document.getElementById("tsResult").innerHTML = "";
    let score = 0;
  
    score = d1 + d2 + d3 + (kv + dt);
  
    return score;
  }
  
  function xetTuyenSinh() {
    const Diemchuan = document.getElementById("Dchuan-input").value * 1;
    const DiemMon1 = document.getElementById("D1-input").value * 1;
    const DiemMon2 = document.getElementById("D2-input").value * 1;
    const DiemMon3 = document.getElementById("D3-input").value * 1;
    const KV = document.getElementById("kv-input").value;
    const DT = document.getElementById("dt-input").value;
    let Tong = 0;
    const DiemKV = XetKV(KV);
    const DiemDT = XetDT(DT);
    if (isNaN(DiemMon1) || isNaN(DiemMon2) || isNaN(DiemMon3)) {
      document.getElementById("tsResult").style =
        "background-color: #ffbbbb; color: red;border: 1px solid red;border-radius: 5px;padding: 10px; margin-bottom: 10px;";
      document.getElementById("tsResult").innerHTML = "XIN PHÉP NHẬP SỐ ĐIỂM";
    } else {
      Tong = DiemTong(DiemMon1, DiemMon2, DiemMon3, DiemKV, DiemDT);
      XetDuyet(DiemMon1, DiemMon2, DiemMon3, Tong, Diemchuan);
    }
  }
  
  
//   bài tập 2

function tongDien(watt) {
    const VND = new Intl.NumberFormat("vn-VN", {
      style: "currency",
      currency: "VND",
    });
  
    const Bac1 = 50 * 500;
    const Bac2 = 100 * 650;
    const Bac3 = 150 * 1100;
    let tong = 0;
    if (watt <= 0) {
      document.getElementById("footerTinhTienDien").style =
        "background-color: #ffbbbb; color: red;border: 1px solid red;border-radius: 5px;padding: 10px; margin-bottom: 10px;";
      document.getElementById("footerTinhTienDien").innerHTML =
        "Xin nhập số lượng điện tiêu thụ";
    }
    if (0 < watt && watt <= 50) {
      tong = watt * 500;
    } else if (50 < watt && watt <= 100) {
      tong = Bac1 + watt * 650;
    } else if (100 < watt && watt <= 150) {
      tong = Bac1 + Bac2 + watt * 1100;
    } else if (150 < watt) {
      tong = Bac1 + Bac2 + Bac3 + watt * 1300;
    }
    return VND.format(tong);
  }
  
  function tienDien() {
    const Watt = document.getElementById("nhapSoKw").value * 1;
    const TenKH = document.getElementById("nhapHoTen").value;
  
    document.getElementById("footerTinhTienDien").style =
      "background-color: #bbffbb;color: green;border: 1px solid green;border-radius: 5px;padding: 10px;margin-bottom: 10px;";
    document.getElementById("footerTinhTienDien").innerHTML =
      "Khách hàng tên: " +
      TenKH +
      "- Đã tiêu thụ: " +
      Watt +
      "W - Tổng số tiền là: " +
      tongDien(Watt);
  }

//   bài tập 3

var thue1 = 5 / 100;
var thue2 = 10 / 100;
var thue3 = 15 / 100;
var thue4 = 20 / 100;
var thue5 = 25 / 100;
var thue6 = 30 / 100;
var thue7 = 35 / 100;

var tongThue1 = 60000000 * thue1;
var tongThue2 = 120000000 * thue2;
var tongThue3 = 210000000 * thue3;
var tongThue4 = 384000000 * thue4;
var tongThue5 = 624000000 * thue5;
var tongThue6 = 960000000 * thue6;

function thuNhapThue(thuNhap, nguoiPT) {
  let total = 0;
  total = thuNhap - 4000000 - nguoiPT * 1600000;

  return total;
}

function tinhThue(ThuNhapChiuThue) {
  let total = 0;
  if (0 < ThuNhapChiuThue && ThuNhapChiuThue <= 60000000) {
    total = ThuNhapChiuThue * thue1;
  } else if (60000000 < ThuNhapChiuThue && ThuNhapChiuThue <= 120000000) {
    total = tongThue1 + ThuNhapChiuThue * thue2;
  } else if (120000000 < ThuNhapChiuThue && ThuNhapChiuThue <= 210000000) {
    total = tongThue1 + tongThue2 + ThuNhapChiuThue * thue3;
  } else if (210000000 < ThuNhapChiuThue && ThuNhapChiuThue <= 384000000) {
    total = tongThue1 + tongThue2 + tongThue3 + ThuNhapChiuThue * thue4;
  } else if (384000000 < ThuNhapChiuThue && ThuNhapChiuThue <= 624000000) {
    total =
      tongThue1 + tongThue2 + tongThue3 + tongThue4 + ThuNhapChiuThue * thue5;
  } else if (624000000 < ThuNhapChiuThue && ThuNhapChiuThue <= 9600000000) {
    total =
      tongThue1 +
      tongThue2 +
      tongThue3 +
      tongThue4 +
      tongThue5 +
      ThuNhapChiuThue * thue6;
  } else if (660000000 < ThuNhapChiuThue) {
    total =
      tongThue1 +
      tongThue2 +
      tongThue3 +
      tongThue4 +
      tongThue5 +
      tongThue6 +
      ThuNhapChiuThue * thue7;
  }

  return total;
}

function tienThue() {
  const ten = document.getElementById("nhapHoTenCaNhan").value;
  const thuNhap = document.getElementById("tongThuNhapNam").value * 1;
  const nguoiPT = document.getElementById("soNguoiPhuThuoc").value;
  const VND = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  });

  let ThuNhapChiuThue = 0;
  let result = 0;

  if (thuNhap <= 0) {
    document.getElementById("footerTienThue").style =
      "background-color: #ffbbbb; color: red;border: 1px solid red;border-radius: 5px;padding: 10px; margin-bottom: 10px;";
    document.getElementById("footerTienThue").innerHTML = "Xin nhập số tiền thu nhập";
  } else {
    ThuNhapChiuThue = thuNhapThue(thuNhap, nguoiPT);
    result = tinhThue(ThuNhapChiuThue);

    document.getElementById("footerTienThue").style =
      "background-color: #bbffbb;color: green;border: 1px solid green;border-radius: 5px;padding: 10px;margin-bottom: 10px;";
    document.getElementById("footerTienThue").innerHTML =
      "Khách hàng tên: " +
      ten +
      "- Tiền thu nhập: " +
      thuNhap +
      " - sô Người phụ thuộc : " +
      nguoiPT +
      " - sô Tiền thu nhập đã chịu thuế : " +
      VND.format(ThuNhapChiuThue) +
      " - Thuế thu nhập cá nhân : " +
      VND.format(result);
  }
}

// bài tập 4

var typeKhach = document.getElementById("type-khach");

function showInput() {
  var type = typeKhach.value;
  switch (type) {
    case "nhadan":
      document.getElementById("ketnoi-input").value = "";
      document.getElementById("ketnoi-input").style = "display: none;";
      document.getElementById("ketnoi-label").style = "display: none;";
      break;

    case "kinhdoanh":
      document.getElementById("ketnoi-label").style = "display: block;";
      document.getElementById("ketnoi-input").style = "display: block;";
      break;
  }
}
showInput();

typeKhach.onclick = function () {
  showInput();
};

var xlHoaDon_nhadan = 4.5;
var xlHoaDon_kinhdoanh = 20.5;

var feeDV_nhadan = 4.5;
function feeDV_kinhdoanh(soKetNoi) {
  let total = 0;
  total = soKetNoi * 5;

  if (soKetNoi >= 10) {
    total = Math.floor(total / 10) * 75;
  }

  return total;
}

var feeCC_nhadan = 7.5;
var feeCC_kinhdoanh = 50;

function tinhTienCap(type, soKetNoi, soKenh) {
  let total = 0;
  switch (type) {
    case "nhadan":
      total = xlHoaDon_nhadan + feeDV_nhadan + soKenh * 7.5;
      break;
    case "kinhdoanh":
      total = xlHoaDon_kinhdoanh + feeDV_kinhdoanh(soKetNoi) + soKenh * 50;
      break;
  }

  return total;
}

function tienCap() {
  const ten = document.getElementById("B4name-input").value;
  const soKetNoi = document.getElementById("ketnoi-input").value * 1;
  const soKenh = document.getElementById("kenhcaocap-input").value * 1;
  const type = typeKhach.value;
  const USD = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  });
  let total = 0;

  total = tinhTienCap(type, soKetNoi, soKenh);

  document.getElementById("b4Result").style =
    "background-color: #bbffbb;color: green;border: 1px solid green;border-radius: 5px;padding: 10px;margin-bottom: 10px;";
  document.getElementById("b4Result").innerHTML =
    "Khách hàng tên: " + ten + " - sô Tiền cáp " + USD.format(total);
}
