import React from "react";
import "./Bannerr.css"; // Đảm bảo bạn import CSS này

const Bannerr: React.FC = () => {
  return (
    <div className="container mt-4 mb-4">
      {/* Đặt chiều cao cố định cho cụm banner */}
      <div className="row g-2" style={{ height: "340px" }}>
        {/* CỘT TRÁI: Carousel (Chiếm 8/12 khung hình) */}
        <div className="col-md-8 h-100">
          <div
            id="carouselExampleIndicators"
            className="carousel slide h-100 shadow-sm rounded overflow-hidden"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner h-100">
              {/* === CAROUSEL ITEM 1 - SỬA LỖI ẢNH & CHỮ TO === */}
              <div
                className="carousel-item active h-100"
                data-bs-interval="3000"
              >
                {/* HÌNH ẢNH NỀN THẬT (Mượn từ Fahasa CDN) */}
                <img
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangChu_Slide_T3_840x320.jpg" // Link ảnh thật
                  className="d-block w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="Khuyến Mãi 1"
                />
                {/* PHẦN TEXT OVERLAY - Tách biệt ở file CSS để thu nhỏ chữ */}
                <div className="carousel-content-overlay text-white text-center d-flex flex-column align-items-center justify-content-center h-100 p-5">
                  {/* SỬA CHỮ TO: Bỏ display-5, dùng class custom */}
                  <h1 className="banner-title fw-bold mb-3">
                    Đọc sách là hộ chiếu
                    <br /> cho vô số cuộc phiêu lưu
                  </h1>
                  <p className="lead mb-4">
                    <em>- MTV</em>
                  </p>
                  <button className="btn btn-primary text-white">
                    Khám phá sách tại STORE
                  </button>
                </div>
              </div>

              {/* === CAROUSEL ITEM 2 - SỬA LỖI ẢNH & CHỮ TO === */}
              <div className="carousel-item h-100" data-bs-interval="3000">
                <img
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/TuanLePhuNu_T324_Slide_840x320.jpg" // Link ảnh thật 2
                  className="d-block w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="Khuyến Mãi 2"
                />
                <div className="carousel-content-overlay text-white text-center d-flex flex-column align-items-center justify-content-center h-100 p-5">
                  <h1 className="banner-title fw-bold mb-3">
                    ƯU ĐÃI THÁNG 3<br />
                    SÁCH HAY GIẢM 50%
                  </h1>
                  <p className="lead mb-4">
                    <em>- Đừng bỏ lỡ!</em>
                  </p>
                  <button className="btn btn-primary text-white">
                    XEM NGAY
                  </button>
                </div>
              </div>

              {/* === CAROUSEL ITEM 3 - SỬA LỖI ẢNH & CHỮ TO === */}
              <div className="carousel-item h-100" data-bs-interval="3000">
                <img
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/VNPAY_Slide_T3_840x320.jpg" // Link ảnh thật 3
                  className="d-block w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="Khuyến Mãi 3"
                />
                <div className="carousel-content-overlay text-white text-center d-flex flex-column align-items-center justify-content-center h-100 p-5">
                  <h1 className="banner-title fw-bold mb-3">
                    THANH TOÁN VNPAY
                    <br />
                    GIẢM THÊM 20%
                  </h1>
                  <p className="lead mb-4">
                    <em>- Nhanh tay kẻo hết!</em>
                  </p>
                  <button className="btn btn-primary text-white">
                    MUA NGAY
                  </button>
                </div>
              </div>
            </div>

            {/* === CÁC NÚT ĐIỀU HƯỚNG TRÁI/PHẢI (Giữ nguyên) === */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* CỘT PHẢI: 2 Ảnh ưu đãi tĩnh xếp dọc (Giữ nguyên) */}
        <div className="col-md-4 d-flex flex-column justify-content-between h-100">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-03-2024/ZaloPay_Thang03_392x156_2.jpg"
            className="w-100 rounded shadow-sm"
            style={{ height: "48%", objectFit: "cover", cursor: "pointer" }}
            alt="Ưu đãi ZaloPay"
          />
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-03-2024/TrangChu_SPP_Thang03_392x156.jpg"
            className="w-100 rounded shadow-sm"
            style={{ height: "48%", objectFit: "cover", cursor: "pointer" }}
            alt="Ưu đãi ShopeePay"
          />
        </div>
      </div>
    </div>
  );
};

export default Bannerr;
