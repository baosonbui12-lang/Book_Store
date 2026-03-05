import React, { ChangeEvent, useRef } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "../user/Profile";

interface Navbar {
    tuKhoaTimKiem: string;
    setTuKhoaTimKiem: (tuKhoa: string) => void;
}

const Navbar: React.FC<Navbar> = (props) => {
    let tmpTuKhoaTimKiem = useRef("");

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        tmpTuKhoaTimKiem.current = e.target.value;
    }

    const handleSearch = () => {
        props.setTuKhoaTimKiem(tmpTuKhoaTimKiem.current);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.setTuKhoaTimKiem(tmpTuKhoaTimKiem.current);
    }

    return (
        <header className="sticky-top shadow-sm">
            <div className="bg-white py-3 border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* 1. LOGO */}
                        <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                            <NavLink className="navbar-brand d-flex align-items-center justify-content-center justify-content-md-start text-decoration-none" to="/">
                                <i className="fas fa-book-open fs-2 text-danger me-2"></i>
                                <span className="fs-3 fw-bold text-danger" style={{ fontFamily: "sans-serif" }}>BookStore</span>
                            </NavLink>
                        </div>

                        {/* 2. THANH TÌM KIẾM */}
                        <div className="col-md-6 mb-3 mb-md-0">
                            <form className="d-flex w-100" onSubmit={handleSubmit}>
                                <input
                                    className="form-control px-4 shadow-none"
                                    type="search"
                                    placeholder="Tìm kiếm sách, tác giả, nhà xuất bản..."
                                    onChange={onSearchInputChange}
                                    style={{ 
                                        border: '2px solid #C92127', 
                                        borderRight: 'none',
                                        borderRadius: '25px 0 0 25px' 
                                    }}
                                />
                                <button
                                    className="btn px-4"
                                    type="submit" 
                                    onClick={handleSearch}
                                    style={{ 
                                        backgroundColor: '#C92127', 
                                        color: 'white',
                                        borderRadius: '0 25px 25px 0',
                                        border: '2px solid #C92127'
                                    }}
                                >
                                    <Search size={20}/>
                                </button>
                            </form>
                        </div>

                        {/* 3. CÁC NÚT ACTION (Thông báo, Giỏ hàng, Tài khoản) */}
                        <div className="col-md-3 d-flex justify-content-center justify-content-md-end align-items-center gap-4">
                            
                            {/* Thông báo */}
                            <div className="text-center text-secondary" style={{ cursor: "pointer", transition: "0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#C92127"} onMouseOut={(e) => e.currentTarget.style.color = "#6c757d"}>
                                <i className="far fa-bell fs-4"></i>
                                <div style={{ fontSize: "13px", marginTop: "4px" }}>Thông báo</div>
                            </div>

                            {/* Giỏ hàng */}
                            <NavLink to="/cart" className="text-decoration-none text-secondary text-center position-relative" style={{ transition: "0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#C92127"} onMouseOut={(e) => e.currentTarget.style.color = "#6c757d"}>
                                <i className="fas fa-shopping-cart fs-4"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-white">
                                    3
                                </span>
                                <div style={{ fontSize: "13px", marginTop: "4px" }}>Giỏ hàng</div>
                            </NavLink>

                            {/* Tài khoản */}
                            <div className="text-center text-secondary d-flex flex-column align-items-center justify-content-center">
                                <div style={{ height: "24px", display: "flex", alignItems: "center" }}>
                                    <UserProfile />
                                </div>
                                <div style={{ fontSize: "13px", marginTop: "4px" }}>Tài khoản</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg py-0" style={{ backgroundColor: "#C92127" }}>
                <div className="container">
                    <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i className="fas fa-bars fs-3"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto fw-medium">
                            {/* Danh mục sách*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white py-3 px-3 d-flex align-items-center" href="#" data-bs-toggle="dropdown" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                                    <i className="fas fa-bars me-2"></i> DANH MỤC SÁCH
                                </a>
                                <ul className="dropdown-menu border-0 shadow-sm rounded-0 mt-0">
                                    <li><NavLink className="dropdown-item py-2" to="/0">Tất cả thể loại</NavLink></li>
                                    <li><NavLink className="dropdown-item py-2" to="/1">Sách Văn học</NavLink></li>
                                    <li><NavLink className="dropdown-item py-2" to="/2">Sách Kinh tế</NavLink></li>
                                    <li><NavLink className="dropdown-item py-2" to="/3">Tâm lý - Kỹ năng</NavLink></li>
                                    <li><NavLink className="dropdown-item py-2" to="/4">Sách Thiếu nhi</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-3 px-3" to="/">Trang chủ</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white py-3 px-3" href="#" data-bs-toggle="dropdown">
                                    Quy định
                                </a>
                                <ul className="dropdown-menu border-0 shadow-sm rounded-0 mt-0">
                                    <li><a className="dropdown-item py-2" href="#">Chính sách đổi trả</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Bảo mật thông tin</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-3 px-3" to="/danh-sach-yeu-thich">Sách yêu thích</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-3 px-3" href="#">Liên hệ</a>
                            </li>
                        </ul>
                        
                        <div className="d-flex align-items-center text-white fw-bold">
                            <i className="fas fa-phone-alt me-2"></i> Hotline: 1900 8888
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;