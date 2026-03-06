import React from "react";
import "./Bannerr.css"; // Đảm bảo bạn import CSS này

const Bannerr: React.FC = () => {
  return (
    <>
      <style>
        {`
          .banner-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .banner-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
          }
        `}
      </style>
      
      <div className="container mt-4 mb-4">
        
        {/* ============================================== */}
        {/* DÒNG 1: BANNER CHÍNH (CAROUSEL + 2 ẢNH BÊN PHẢI) */}
        {/* ============================================== */}
        <div className="row g-2" style={{ height: "340px" }}>
          
          {/* CỘT TRÁI: Carousel (Chiếm 8/12 khung hình) */}
          <div className="col-md-8 h-100">
            <div
              id="carouselExampleIndicators"
              className="carousel slide h-100 shadow-sm rounded overflow-hidden"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>

              <div className="carousel-inner h-100">
                <div className="carousel-item active h-100" data-bs-interval="3000">
                  <img src="/images/anh-banner/QC1.png" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Khuyến Mãi 1" />
                </div>
                <div className="carousel-item h-100" data-bs-interval="3000">
                  <img src="/images/anh-banner/QC2.png" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Khuyến Mãi 2" />
                </div>
                <div className="carousel-item h-100" data-bs-interval="3000">
                  <img src="/images/anh-banner/QC3.png" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Khuyến Mãi 3" />
                </div>
                <div className="carousel-item h-100" data-bs-interval="3000">
                  <img src="/images/anh-banner/QC4.png" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Khuyến Mãi 4" />
                </div>
                <div className="carousel-item h-100" data-bs-interval="3000">
                  <img src="/images/anh-banner/QC5.png" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Khuyến Mãi 5" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* CỘT PHẢI: 2 Ảnh ưu đãi tĩnh xếp dọc */}
          <div className="col-md-4 d-flex flex-column justify-content-between h-100">
            <img
              src="/images/anh-banner/QC6.png"
              className="w-100 rounded shadow-sm banner-hover"
              style={{ height: "48%", objectFit: "cover" }}
              alt="Ưu đãi ZaloPay"
            />
            <img
              src="/images/anh-banner/QC7.png"
              className="w-100 rounded shadow-sm banner-hover"
              style={{ height: "48%", objectFit: "cover" }}
              alt="Ưu đãi ShopeePay"
            />
          </div>
        </div>

        {/* ============================================== */}
        {/* DÒNG 2: 4 ẢNH QUẢNG CÁO BÊN DƯỚI               */}
        {/* ============================================== */}
        <div className="row g-2 mt-2">
          <div className="col-6 col-md-3">
            <img 
              src="/images/anh-banner/QC8.png" 
              className="w-100 rounded shadow-sm banner-hover" 
              alt="Quảng cáo 8" 
            />
          </div>
          <div className="col-6 col-md-3">
            <img 
              src="/images/anh-banner/QC9.png" 
              className="w-100 rounded shadow-sm banner-hover" 
              alt="Quảng cáo 9" 
            />
          </div>
          <div className="col-6 col-md-3">
            <img 
              src="/images/anh-banner/QC10.png" 
              className="w-100 rounded shadow-sm banner-hover" 
              alt="Quảng cáo 10" 
            />
          </div>
          <div className="col-6 col-md-3">
            <img 
              src="/images/anh-banner/QC11.png" 
              className="w-100 rounded shadow-sm banner-hover" 
              alt="Quảng cáo 11" 
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Bannerr;