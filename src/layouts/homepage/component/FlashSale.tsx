import React, { useRef } from "react";
import "./FlashSale.css";

// Dữ liệu mẫu (Mock Data) cho Flash Sale
const flashSaleBooks = [
  {
    id: 1,
    title: "Gánh Gánh Gồng Gồng (Tái Bản)",
    price: 96000,
    oldPrice: 160000,
    discount: 40,
    sold: 15,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_25225.jpg",
  },
  {
    id: 2,
    title: "Cuộc Chiến Kim Loại Hiếm",
    price: 186000,
    oldPrice: 248000,
    discount: 25,
    sold: 5,
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_241512.jpg",
  },
  {
    id: 3,
    title: "Bài Tập Toán Nâng Cao Lớp 5",
    price: 60060,
    oldPrice: 78000,
    discount: 23,
    sold: 89,
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_217482.jpg",
  },
  {
    id: 4,
    title: "Tủ Sách Cho Bé Vào Lớp 1",
    price: 7700,
    oldPrice: 10000,
    discount: 23,
    sold: 120,
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_222718.jpg",
  },
  {
    id: 5,
    title: "Chuột Máy Tính Có Dây Newmen",
    price: 79300,
    oldPrice: 122000,
    discount: 35,
    sold: 3,
    image: "https://cdn0.fahasa.com/media/catalog/product/m/2/m266-black_1.jpg",
  },
  {
    id: 6,
    title: "Nhà Giả Kim (Tái bản)",
    price: 63000,
    oldPrice: 79000,
    discount: 20,
    sold: 50,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_43034.jpg",
  },
];

const FlashSale: React.FC = () => {
  // Dùng useRef để điều khiển thanh cuộn ngang
  const sliderRef = useRef<HTMLDivElement>(null);

  // Hàm xử lý khi bấm nút mũi tên Trái/Phải
  const slide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 600; // Khoảng cách trượt mỗi lần bấm
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // Trượt mượt mà
      });
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="flash-sale-wrapper shadow-sm rounded">
        {/* PHẦN ĐẦU: TIÊU ĐỀ & ĐẾM NGƯỢC */}
        <div className="flash-sale-header d-flex justify-content-between align-items-center p-3 bg-white rounded-top border-bottom">
          <div className="d-flex align-items-center gap-3">
            <h3
              className="mb-0 fw-bold fst-italic"
              style={{ color: "#F54124" }}
            >
              <i className="fas fa-bolt text-warning me-2"></i>FLASH SALE
            </h3>
            <div className="countdown-timer d-flex align-items-center gap-1 fw-bold">
              <span className="text-secondary me-2">Kết thúc trong</span>
              <span className="badge bg-dark rounded-pill fs-6 px-2">00</span> :
              <span className="badge bg-dark rounded-pill fs-6 px-2">50</span> :
              <span className="badge bg-dark rounded-pill fs-6 px-2">14</span>
            </div>
          </div>
          <a href="#" className="text-primary text-decoration-none fw-semibold">
            Xem tất cả <i className="fas fa-chevron-right ms-1"></i>
          </a>
        </div>

        {/* PHẦN THÂN: DANH SÁCH SẢN PHẨM TRƯỢT NGANG */}
        <div
          className="flash-sale-body p-3 position-relative"
          style={{ backgroundColor: "#ff6a6a" }}
        >
          {/* Nút trượt trái */}
          <button
            className="btn slide-btn left rounded-circle shadow"
            onClick={() => slide("left")}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Khung chứa các thẻ sản phẩm */}
          <div className="flash-sale-slider d-flex gap-3" ref={sliderRef}>
            {flashSaleBooks.map((book) => (
              <div
                key={book.id}
                className="card border-0 rounded-3 flex-shrink-0"
                style={{ width: "200px" }}
              >
                {/* Ảnh sản phẩm */}
                <div className="p-3">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "180px", objectFit: "contain" }}
                  />
                </div>

                <div className="card-body p-2 d-flex flex-column">
                  <h6
                    className="card-title text-truncate-2"
                    style={{ fontSize: "14px", height: "40px" }}
                  >
                    {book.title}
                  </h6>

                  {/* Giá và Phần trăm giảm */}
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="text-danger fw-bold fs-5">
                      {book.price.toLocaleString("vi-VN")} đ
                    </span>
                    <span className="badge bg-danger rounded-1">
                      -{book.discount}%
                    </span>
                  </div>
                  <del className="text-muted" style={{ fontSize: "12px" }}>
                    {book.oldPrice.toLocaleString("vi-VN")} đ
                  </del>

                  {/* Thanh Tiến Độ - Đã bán */}
                  <div className="mt-auto pt-2">
                    <div
                      className="progress rounded-pill position-relative"
                      style={{ height: "16px", backgroundColor: "#f0f0f0" }}
                    >
                      <div
                        className="progress-bar bg-danger rounded-pill"
                        role="progressbar"
                        style={{ width: `${(book.sold / 150) * 100}%` }}
                      ></div>
                      <small
                        className="position-absolute w-100 text-center text-white fw-bold"
                        style={{
                          fontSize: "10px",
                          lineHeight: "16px",
                          top: 0,
                          left: 0,
                          zIndex: 2,
                        }}
                      >
                        Đã bán {book.sold}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút trượt phải */}
          <button
            className="btn slide-btn right rounded-circle shadow"
            onClick={() => slide("right")}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
