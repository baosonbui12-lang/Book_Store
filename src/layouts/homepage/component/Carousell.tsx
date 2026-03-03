import React, { useEffect, useState } from "react";
import { lay3SachMoiNhat } from "../../../api/BookApi";
import BookModel from "../../../model/BookModel";
import CarousellItem from "./CarousellItem";

const Carousell: React.FC = () => {
  const [danhSachSanPham, setDanhSachSanPham] = useState<BookModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState<string | null>(null);

  useEffect(() => {
    lay3SachMoiNhat()
      .then((sachData) => {
        setDanhSachSanPham(sachData.ketQua);
        setDangTaiDuLieu(false);
      })
      .catch((error) => {
        setBaoLoi(error.message);
        setDangTaiDuLieu(false);
      });
  }, []);

  if (dangTaiDuLieu) {
    return (
      <div className="container text-center mt-5">
        <h1>Đang tải dữ liệu...</h1>
      </div>
    );
  }

  if (baoLoi) {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger">Gặp lỗi: {baoLoi}</h1>
      </div>
    );
  }

  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          {/* Dùng vòng lặp map để tự động render số lượng sách thực tế */}
          {danhSachSanPham.map((sach, index) => (
            <div
              key={sach.maSach} // Dùng mã sách làm key sẽ chuẩn hơn dùng index
              // Phần tử đầu tiên (index === 0) phải có class 'active' thì Carousel mới chạy được
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="10000"
            >
              {/* Bootstrap Flexbox: Ép phần tử con (sách) ra chính giữa */}
              <div className="d-flex justify-content-center align-items-center">
                <CarousellItem sach={sach} />
              </div>
            </div>
          ))}
        </div>

        {/* Chỉ hiển thị nút Next/Prev nếu có nhiều hơn 1 cuốn sách */}
        {danhSachSanPham.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousell;
