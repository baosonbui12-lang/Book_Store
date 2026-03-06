import React, { useState, useRef } from "react";
import "./MegaMenu.css";

// DỮ LIỆU MẪU - DANH MỤC CỘT TRÁI
const categories = [
  { id: "trongnuoc", name: "Sách Trong Nước", icon: "fas fa-book" },
  { id: "foreign", name: "FOREIGN BOOKS", icon: "fas fa-globe-americas" },
  { id: "vpp", name: "VPP - Dụng Cụ Học Sinh", icon: "fas fa-pen-nib" },
  { id: "dochoi", name: "Đồ Chơi", icon: "fas fa-gamepad" },
  { id: "lamdep", name: "Làm Đẹp - Sức Khỏe", icon: "fas fa-heartbeat" },
  { id: "sgk", name: "Sách Giáo Khoa 2025", icon: "fas fa-graduation-cap" },
  {
    id: "thuonghieu",
    name: "VPP - DCHS Theo Thương Hiệu",
    icon: "fas fa-tags",
  },
  {
    id: "dochoith",
    name: "Đồ Chơi Theo Thương Hiệu",
    icon: "fas fa-puzzle-piece",
  },
  { id: "bachhoa", name: "Bách Hóa Online - Lưu Niệm", icon: "fas fa-gift" },
];

// DỮ LIỆU KHỔNG LỒ - CỘT PHẢI
const subCategoriesData: any = {
  trongnuoc: [
    {
      title: "VĂN HỌC",
      links: [
        "Tiểu Thuyết",
        "Truyện Ngắn - Tản Văn",
        "Light Novel",
        "Ngôn Tình",
        "Xem tất cả",
      ],
    },
    {
      title: "KINH TẾ",
      links: [
        "Nhân Vật - Bài Học Kinh Doanh",
        "Quản Trị - Lãnh Đạo",
        "Marketing - Bán Hàng",
        "Phân Tích Kinh Tế",
        "Xem tất cả",
      ],
    },
    {
      title: "TÂM LÝ - KĨ NĂNG SỐNG",
      links: [
        "Kỹ Năng Sống",
        "Rèn Luyện Nhân Cách",
        "Tâm Lý",
        "Sách Cho Tuổi Mới Lớn",
        "Xem tất cả",
      ],
    },
    {
      title: "NUÔI DẠY CON",
      links: [
        "Cẩm Nang Làm Cha Mẹ",
        "Phương Pháp Giáo Dục Trẻ",
        "Phát Triển Trí Tuệ Cho Trẻ",
        "Xem tất cả",
      ],
    },
    {
      title: "SÁCH THIẾU NHI",
      links: [
        "Manga - Comic",
        "Kiến Thức Bách Khoa",
        "Sách Tranh Kỹ Năng Sống",
        "Vừa Học Vừa Chơi",
        "Xem tất cả",
      ],
    },
    {
      title: "TIỂU SỬ - HỒI KÝ",
      links: [
        "Câu Chuyện Cuộc Đời",
        "Chính Trị",
        "Kinh Tế",
        "Nghệ Thuật - Giải Trí",
        "Xem tất cả",
      ],
    },
    {
      title: "GIÁO KHOA - THAM KHẢO",
      links: [
        "Sách Giáo Khoa",
        "Sách Tham Khảo",
        "Luyện Thi THPT Quốc Gia",
        "Mẫu Giáo",
        "Xem tất cả",
      ],
    },
    {
      title: "SÁCH HỌC NGOẠI NGỮ",
      links: [
        "Tiếng Anh",
        "Tiếng Nhật",
        "Tiếng Hoa",
        "Tiếng Hàn",
        "Xem tất cả",
      ],
    },
    { title: "SÁCH MỚI ♥", links: [] },
    { title: "SÁCH BÁN CHẠY ♥", links: [] },
  ],
  foreign: [
    {
      title: "FICTION",
      links: [
        "Contemporary Fiction",
        "Romance",
        "Fantasy",
        "Classics",
        "Xem tất cả",
      ],
    },
    {
      title: "BUSINESS & MANAGEMENT",
      links: [
        "Business & Management",
        "Economics",
        "Finance & Accounting",
        "Xem tất cả",
      ],
    },
    {
      title: "PERSONAL DEVELOPMENT",
      links: [
        "Popular Psychology",
        "Advice On Careers & Achievin...",
        "Personal Finance",
        "Xem tất cả",
      ],
    },
    {
      title: "CHILDREN'S BOOKS",
      links: [
        "Picture & Activity Books",
        "Fiction (For Kids & Teen)",
        "Education",
        "Non-Fiction",
        "Xem tất cả",
      ],
    },
    {
      title: "DICTIONARIES & LANGUAGES",
      links: [
        "ELT: Learning Material & Cour...",
        "ELT: English For Specific Purp...",
        "Dictionaries",
        "Xem tất cả",
      ],
    },
    {
      title: "OTHER LANGUAGES",
      links: ["Japanese Books", "German Books", "French Books"],
    },
    {
      title: "OTHER CATEGORIES",
      links: [
        "Biography",
        "Society & Social Sciences",
        "Science & Geography",
        "Food & Drink",
        "Xem tất cả",
      ],
    },
    { title: "NEW ARRIVALS ♥", links: [] },
    { title: "COMING SOON ♥", links: [] },
    { title: "BEST SELLERS ♥", links: [] },
  ],
  vpp: [
    {
      title: "BÚT - VIẾT",
      links: [
        "Bút Bi - Ruột Bút Bi",
        "Bút Gel - Bút Nước",
        "Bút Mực - Bút Máy",
        "Bút Dạ Quang",
        "Bút Chì - Ruột Bút Chì",
        "Xem tất cả",
      ],
    },
    {
      title: "DỤNG CỤ HỌC SINH",
      links: [
        "Gôm - Tẩy",
        "Gọt Bút Chì",
        "Thước",
        "Bóp Viết - Hộp Bút",
        "Bộ Dụng Cụ Học Tập",
        "Xem tất cả",
      ],
    },
    {
      title: "DỤNG CỤ VĂN PHÒNG",
      links: [
        "Bìa - File Hồ Sơ",
        "Kẹp Giấy - Kẹp Bướm",
        "Đồ Bấm Kim - Kim Bấm...",
        "Cắm Bút - Bảng Tên",
        "Xem tất cả",
      ],
    },
    {
      title: "DỤNG CỤ VẼ",
      links: [
        "Bút Vẽ",
        "Màu Vẽ",
        "Khay - Cọ Vẽ",
        "Tập Vẽ - Giấy Vẽ",
        "Xem tất cả",
      ],
    },
    {
      title: "SẢN PHẨM VỀ GIẤY",
      links: [
        "Tập - Vở",
        "Sổ Tay Các Loại",
        "Giấy Photo",
        "Giấy Note",
        "Xem tất cả",
      ],
    },
    {
      title: "SẢN PHẨM KHÁC",
      links: [
        "Dao Rọc Giấy",
        "Băng Keo",
        "Bút Xóa Nước",
        "Hồ Dán",
        "Xem tất cả",
      ],
    },
    { title: "SẢN PHẨM ĐIỆN TỬ", links: ["Máy Tính Điện Tử", "Xem tất cả"] },
    { title: "SẢN PHẨM MỚI ♥", links: [] },
    { title: "SẢN PHẨM BÁN CHẠY ♥", links: [] },
  ],
  dochoi: [
    {
      title: "ĐỒ CHƠI NỔI BẬT",
      links: [
        "Xếp Hình - Lắp Ghép",
        "Đồ Chơi Giáo Dục",
        "Đồ Chơi Điều Khiển",
        "Board Game",
        "Xem tất cả",
      ],
    },
    {
      title: "PHƯƠNG TIỆN CÁC LOẠI",
      links: [
        "Ô Tô",
        "Máy Bay",
        "Tàu Hỏa",
        "Tàu Thủy",
        "Phương Tiện Khác",
        "Xem tất cả",
      ],
    },
    {
      title: "MÔ HÌNH CÁC LOẠI",
      links: [
        "Mô Hình Giấy",
        "Mô Hình Gỗ",
        "Mô Hình Nhân Vật",
        "Mô Hình Động Vật",
        "Xem tất cả",
      ],
    },
    {
      title: "ĐỒ CHƠI THEO PHIM",
      links: [
        "My Little Pony",
        "Paw Patrol",
        "Super Wings",
        "Chiến Thần Vô Cực",
        "Xem tất cả",
      ],
    },
    {
      title: "ĐỒ CHƠI KHÁC",
      links: [
        "Bột Nặn - Cát Nặn",
        "Búp Bê",
        "Thú Bông",
        "Hướng Nghiệp",
        "Xem tất cả",
      ],
    },
    { title: "SẢN PHẨM MỚI ♥", links: [] },
    { title: "SẢN PHẨM BÁN CHẠY ♥", links: [] },
  ],
  lamdep: [
    {
      title: "LÀM ĐẸP - SỨC KHỎE",
      links: [
        "Khẩu Trang Các Loại",
        "Nước Rửa Tay - Xà Phòng",
        "Băng Keo Cá Nhân",
        "Khăn Giấy - Giấy Ướt",
        "Chăm Sóc Cá Nhân Khác",
        "Sản Phẩm Làm Đẹp",
        "Xem tất cả",
      ],
    },
  ],
  sgk: [
    {
      title: "SÁCH GIÁO KHOA",
      links: [
        "Lớp 1",
        "Lớp 2",
        "Lớp 3",
        "Lớp 4",
        "Lớp 5",
        "Lớp 6",
        "Lớp 7",
        "Lớp 8",
        "Lớp 9",
        "Lớp 10",
        "Lớp 11",
        "Lớp 12",
        "Xem tất cả",
      ],
    },
    {
      title: "SÁCH THAM KHẢO",
      links: [
        "Mẫu Giáo",
        "Lớp 1",
        "Lớp 2",
        "Lớp 3",
        "Lớp 4",
        "Lớp 5",
        "Lớp 6",
        "Lớp 7",
        "Lớp 8",
        "Lớp 9",
        "Lớp 10",
        "Lớp 11",
        "Lớp 12",
        "Xem tất cả",
      ],
    },
    {
      title: "LUYỆN THI THPTQG",
      links: [
        "Môn Toán",
        "Môn Ngữ Văn",
        "Môn Tiếng Anh",
        "Môn Vật Lý",
        "Môn Hóa Học",
        "Môn Sinh Học",
        "Môn Địa Lý",
        "Môn Lịch Sử",
        "Xem tất cả",
      ],
    },
    {
      title: "ĐỒ NGHỀ ĐẾN TRƯỜNG",
      links: [
        "Cặp , Ba Lô",
        "Máy Tính",
        "Bút Các Loại",
        "Bóp Viết - Hộp Bút",
        "Tập Vở",
        "Bao Tập - Bao Sách",
        "Mực",
        "Gôm - Tẩy",
        "Gọt Bút Chì",
        "Xem tất cả",
      ],
    },
  ],
  thuonghieu: [
    {
      title: "THƯƠNG HIỆU NỔI BẬT",
      links: [
        "Thiên Long",
        "Morning Glory",
        "Kyobo",
        "Kinokuniya",
        "Artline",
        "Marvy",
        "Milan",
        "Apli",
        "Helix",
        "Faber-Castell",
        "Stabilo",
        "Maped",
        "Bantex",
        "Xem tất cả",
      ],
    },
  ],
  dochoith: [
    {
      title: "THƯƠNG HIỆU ĐỒ CHƠI",
      links: [
        "Lego",
        "tiNiToy",
        "Lắp Ráp DUKA",
        "Lắp Ráp Sluban",
        "Lắp Ráp LaQ",
        "Mô Hình Gỗ DIY - Robotime",
        "Đồ Chơi VBCare",
        "Hot Wheels",
        "Play-Doh",
        "Barbie",
        "Xem tất cả",
      ],
    },
  ],
  bachhoa: [
    {
      title: "ĐỒ DÙNG CÁ NHÂN",
      links: [
        "Túi - Ví Thời Trang",
        "Đồng Hồ",
        "Phụ Kiện Du Lịch",
        "Phụ Kiện Tóc",
        "Xem tất cả",
      ],
    },
    {
      title: "ĐỒ ĐIỆN GIA DỤNG",
      links: [
        "Đèn Bàn",
        "Đèn Ngủ",
        "Đèn Pin",
        "Pin & Dụng Cụ Sạc Pin",
        "Xem tất cả",
      ],
    },
    {
      title: "NHÀ CỬA - ĐỜI SỐNG",
      links: [
        "Ly, Cốc, Bình Nước",
        "Hộp Đựng Đồ Cá Nhân",
        "Trang Trí Nhà Cửa",
        "Sửa Chữa Nhà Cửa",
        "Xem tất cả",
      ],
    },
    {
      title: "LƯU NIỆM",
      links: [
        "Móc Khóa",
        "Gương - Lược",
        "Khung Hình",
        "Tượng",
        "Quà Tặng Trang Trí Khác",
        "Xem tất cả",
      ],
    },
    {
      title: "SẢN PHẨM KHÁC",
      links: [
        "Thực Phẩm",
        "Thiết Bị Số - Phụ Kiện Số",
        "Quạt Các Loại",
        "Xem tất cả",
      ],
    },
  ],
};

const MegaMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("trongnuoc");
  const timeoutRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="mega-menu-wrapper position-relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="btn btn-light border-0 px-3 d-flex align-items-center gap-1 trigger-btn">
        <i className="fas fa-th-large fs-5 text-danger"></i>
        <i
          className="fas fa-chevron-down ms-1"
          style={{ fontSize: "10px", color: "#666" }}
        ></i>
      </button>

      {isOpen && (
        <>
          <div className="hover-bridge"></div>

          {/* SỰ KIỆN ĐÓNG BẢNG ĐƯỢC THÊM VÀO ĐÂY */}
          <div
            className="mega-menu-backdrop"
            onMouseEnter={() => setIsOpen(false)}
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="mega-menu-dropdown-wrapper">
            <div className="container">
              <div className="mega-menu-container bg-white d-flex text-start shadow-lg">
                {/* 1. CỘT TRÁI: Dãn cách đều chiều cao bằng flex-column và flex-grow-1 */}
                <div className="mega-menu-left py-3 bg-light text-start d-flex flex-column">
                  <div className="ps-4 pe-4 py-2 text-secondary fw-bold border-bottom mb-2 fs-5">
                    Danh mục sản phẩm
                  </div>
                  <ul className="list-unstyled mb-0 p-0 d-flex flex-column flex-grow-1">
                    {categories.map((cat) => (
                      <li
                        key={cat.id}
                        /* flex-grow-1 giúp các mục tự động dãn đều ra phủ kín bảng */
                        className={`menu-item fw-bold px-4 d-flex align-items-center gap-3 flex-grow-1 ${activeCategory === cat.id ? "active bg-white" : ""}`}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                      >
                        {cat.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. CỘT PHẢI: Ép cứng col-md-3 để chia chuẩn 4 cột, không bị bóp méo chữ */}
                <div className="mega-menu-right p-5 bg-white flex-grow-1 text-start overflow-auto">
                  <h4
                    className="fw-bold mb-4 d-flex align-items-center gap-2 text-uppercase"
                    style={{ color: "#C92127" }}
                  >
                    {categories.find((c) => c.id === activeCategory)?.name}
                  </h4>

                  {/* ÉP GIAO DIỆN CHUẨN: Dùng row thông thường và gán col-md-3 cho từng mục */}
                  <div className="row g-4 text-start">
                    {(subCategoriesData[activeCategory] || []).map(
                      (subCol: any, index: number) => (
                        <div className="col-12 col-md-3 mb-2" key={index}>
                          <h6
                            className="fw-bold text-dark mb-3 text-uppercase"
                            style={{ fontSize: "14px" }}
                          >
                            {subCol.title}
                          </h6>
                          <ul className="list-unstyled p-0 m-0">
                            {subCol.links.map((link: string, i: number) => (
                              <li key={i} className="mb-2">
                                <a
                                  href="#"
                                  className={`text-decoration-none ${link === "Xem tất cả" || link.includes("♥") ? "text-primary" : "text-secondary sub-link"}`}
                                  style={{ fontSize: "13.5px" }}
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MegaMenu;
