import React, { ChangeEvent, useRef } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "../user/Profile";
import MegaMenu from "./MegaMenu"; // <-- Đã import MegaMenu vào đây (Đảm bảo file MegaMenu.tsx nằm cùng thư mục)

interface NavbarProps {
  tuKhoaTimKiem: string;
  setTuKhoaTimKiem: (tuKhoa: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  let tmpTuKhoaTimKiem = useRef("");

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    tmpTuKhoaTimKiem.current = e.target.value;
  };

  const handleSearch = () => {
    props.setTuKhoaTimKiem(tmpTuKhoaTimKiem.current);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.setTuKhoaTimKiem(tmpTuKhoaTimKiem.current);
  };

  return (
    <>
      <style>
        {`
                .nav-hover-red {
                    color: #6c757d;
                    transition: all 0.2s ease-in-out;
                }
                .nav-hover-red:hover {
                    color: #C92127 !important;
                }
                .nav-icon-wrapper {
                    width: 70px; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    cursor: pointer;
                }
                .search-input::placeholder {
                    color: #999;
                    font-size: 14.5px;
                }
                .search-input:focus {
                    outline: none;
                    box-shadow: none;
                }
            `}
      </style>

      <header
        className="sticky-top bg-white"
        style={{
          zIndex: 1050,
          borderBottom: "1px solid #f0f0f0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div className="container-fluid px-4 px-xl-5 py-2">
          <div className="d-flex align-items-center justify-content-between">
            {/* ============================================== */}
            {/* 1. KHỐI BÊN TRÁI: CHỈ CÓ LOGO                  */}
            {/* ============================================== */}
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <img
                  src="/images/Logo bookstore.png"
                  alt="Bookstore Logo"
                  style={{
                    height: "90px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </NavLink>
            </div>

            {/* ============================================== */}
            {/* 2. KHỐI GIỮA: DANH MỤC + THANH TÌM KIẾM        */}
            {/* ============================================== */}
            <div
              className="d-flex align-items-center flex-grow-1 justify-content-center mx-4 mx-xl-5"
              style={{ maxWidth: "850px" }}
            >
              {/* ================= ĐÃ THAY THẾ MEGA MENU VÀO ĐÂY ================= */}
              <div className="d-none d-md-block me-3">
                <MegaMenu />
              </div>
              {/* ================================================================= */}

              {/* Thanh tìm kiếm */}
              <form
                className="d-flex align-items-center w-100"
                onSubmit={handleSubmit}
                style={{
                  border: "2px solid #C92127",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "42px",
                  backgroundColor: "#fff",
                }}
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent shadow-none search-input px-3 h-100"
                  placeholder="Tìm kiếm tựa sách, tác giả, nhà xuất bản..."
                  onChange={onSearchInputChange}
                />
                <button
                  className="btn border-0 d-flex align-items-center justify-content-center px-4"
                  type="submit"
                  onClick={handleSearch}
                  style={{
                    backgroundColor: "#C92127",
                    color: "white",
                    borderRadius: "0",
                    height: "100%",
                  }}
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* ============================================== */}
            {/* 3. KHỐI BÊN PHẢI: CÁC ICONS                   */}
            {/* ============================================== */}
            <div className="d-flex align-items-center flex-shrink-0 gap-2 gap-xl-3">
              {/* Thông báo */}
              <div className="nav-icon-wrapper nav-hover-red">
                <div
                  style={{
                    height: "28px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <i className="far fa-bell fs-4"></i>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "4px",
                  }}
                >
                  Thông báo
                </span>
              </div>

              {/* Giỏ hàng */}
              <NavLink
                to="/cart"
                className="nav-icon-wrapper nav-hover-red position-relative"
              >
                <div
                  style={{
                    height: "28px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <i className="fas fa-shopping-cart fs-4"></i>
                </div>
                <span
                  className="position-absolute badge rounded-pill bg-warning text-dark border border-white"
                  style={{
                    top: "-2px",
                    right: "15px",
                    fontSize: "10px",
                    padding: "3px 6px",
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "4px",
                  }}
                >
                  Giỏ hàng
                </span>
              </NavLink>

              {/* Tài khoản (UserProfile) */}
              <div className="nav-icon-wrapper nav-hover-red">
                <div
                  style={{
                    height: "28px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <UserProfile />
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "4px",
                  }}
                >
                  Tài khoản
                </span>
              </div>

              {/* Dịch Ngôn ngữ (Có Cờ) */}
              <div className="nav-icon-wrapper nav-hover-red d-none d-lg-flex dropdown">
                <div
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="d-flex align-items-center rounded border px-2 py-1 mt-1"
                  style={{ borderColor: "#ddd", height: "32px" }}
                >
                  <img
                    src="https://flagcdn.com/w20/vn.png"
                    alt="VN"
                    style={{ width: "20px", borderRadius: "2px" }}
                  />
                  <i
                    className="fas fa-chevron-down ms-2 text-secondary"
                    style={{ fontSize: "10px" }}
                  ></i>
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 rounded-3"
                  style={{ minWidth: "130px", padding: "8px" }}
                >
                  <li>
                    <a
                      className="dropdown-item py-2 fw-medium text-dark rounded-2 nav-hover-red"
                      style={{ fontSize: "14px" }}
                      href="#"
                    >
                      <img
                        src="https://flagcdn.com/w20/vn.png"
                        alt="VN"
                        className="me-2"
                        style={{ width: "20px" }}
                      />{" "}
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item py-2 fw-medium text-dark rounded-2 nav-hover-red mt-1"
                      style={{ fontSize: "14px" }}
                      href="#"
                    >
                      <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="EN"
                        className="me-2"
                        style={{ width: "20px" }}
                      />{" "}
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
