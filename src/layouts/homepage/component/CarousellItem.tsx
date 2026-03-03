import React, { useEffect, useState } from "react";
import BookModel from "../../../model/BookModel";
import HinhAnhModel from "../../../model/HinhAnhModel";
import { layAnhDauTienCuaMotQuyenSach } from "../../../api/HinhAnhApi";
import { error } from "console";
interface CarousellItem {
  sach: BookModel;
}

const CarousellItem: React.FC<CarousellItem> = ({ sach }) => {
  const [danhSachHinhAnh, setDanhSachHinhAnh] = useState<HinhAnhModel[] | null>(
    [],
  );
  const [baoLoi, setBaoLoi] = useState(null);
  const [layDuLieu, setLayDuLieu] = useState(true);

  useEffect(() => {
    layAnhDauTienCuaMotQuyenSach(sach?.maSach)
      .then((anhData) => {
        setDanhSachHinhAnh(anhData);
        setLayDuLieu(false);
      })
      .catch((error) => {
        setBaoLoi(error.message);
        setLayDuLieu(true);
      });
  }, []);
  if (layDuLieu) {
    return (
      <div>
        <h1>dang lay du lieu</h1>
      </div>
    );
  }
  if (baoLoi) {
    return (
      <div>
        <h1>gap loi</h1>
      </div>
    );
  }
  return (
    <div className="row align-items-center justify-content-center pt-5 pb-5">
      {/* Cột chứa ảnh bên trái */}
      <div className="col-12 col-md-5 text-center text-md-end">
        <img
          src={danhSachHinhAnh?.[0]?.duLieuAnh}
          alt={sach?.tenSach}
          className="img-fluid shadow-sm"
          style={{ maxWidth: "250px", height: "auto" }}
        />
      </div>

      {/* Cột chứa thông tin sách bên phải */}
      <div className="col-12 col-md-7 text-center text-md-start mt-4 mt-md-0">
        <h3 className="fw-bold">{sach?.tenSach}</h3>
        <p className="text-muted">{sach?.moTa}</p>
        {/* ... Các thông tin khác như giá tiền bạn để ở đây ... */}
      </div>
    </div>
  );
};
export default CarousellItem;
