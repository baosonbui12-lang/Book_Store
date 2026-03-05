import React, { ChangeEvent, useRef, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "../user/Profile";

interface NavbarProps {
    tuKhoaTimKiem: string;
    setTuKhoaTimKiem: (tuKhoa: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    let tmpTuKhoaTimKiem = useRef("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
        
        <header className="sticky-top bg-white" style={{ zIndex: 1050, borderBottom: '1px solid #f0f0f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            {/* Đổi từ container sang container-fluid px-4 px-xl-5 để đẩy 2 mép ra xa */}
            <div className="container-fluid px-4 px-xl-5 py-2">
                <div className="d-flex align-items-center justify-content-between">
                    
                    {/* ============================================== */}
                    {/* 1. KHỐI BÊN TRÁI: CHỈ CÓ LOGO                  */}
                    {/* ============================================== */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-decoration-none d-flex align-items-center gap-2">
                            {/* ÉP CỨNG CHIỀU CAO CHO ẢNH Ở ĐÂY */}
                            <img 
                                src="/images/Logo bookstore.png" 
                                alt="Bookstore Logo" 
                                style={{ height: '90px', width: 'auto', objectFit: 'contain' }} 
                            />
                        </NavLink>
                    </div>

                    {/* ============================================== */}
                    {/* 2. KHỐI GIỮA: DANH MỤC + THANH TÌM KIẾM        */}
                    {/* ============================================== */}
                    <div className="d-flex align-items-center flex-grow-1 justify-content-center mx-4 mx-xl-5" style={{ maxWidth: '850px' }}>
                        
                        {/* Nút 4 Ô Vuông (Nay đã nằm sát thanh tìm kiếm) */}
                        <div 
                            className="position-relative d-none d-md-block me-3"
                            onMouseEnter={() => setIsCategoryOpen(true)}
                            onMouseLeave={() => setIsCategoryOpen(false)}
                            style={{ padding: '8px', cursor: 'pointer' }}
                        >
                            <div className="d-flex align-items-center" style={{ transition: '0.2s' }}>
                                <i className="fas fa-th-large" style={{ color: '#C92127', fontSize: '32px', fontWeight: 'bold' }}></i>
                                <i className="fas fa-chevron-down ms-1 text-secondary" style={{ fontSize: '14px', marginTop: '12px' }}></i>
                            </div>

                            {/* Cầu nối tàng hình */}
                            {isCategoryOpen && <div style={{ position: 'absolute', top: '40px', left: '-10px', width: '80px', height: '20px', background: 'transparent' }}></div>}

                            {/* Bảng Dropdown Danh Mục */}
                            {isCategoryOpen && (
                                <div className="position-absolute bg-white rounded-3 py-2" style={{ top: '55px', left: '-10px', minWidth: '260px', zIndex: 1000, border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                    <NavLink className="dropdown-item py-2 px-4 fw-medium text-dark d-flex align-items-center nav-hover-red" to="/0" style={{fontSize: '15px'}}><i className="fas fa-layer-group me-3 text-secondary" style={{width: '20px'}}></i>Tất cả sản phẩm</NavLink>
                                    <NavLink className="dropdown-item py-2 px-4 fw-medium text-dark d-flex align-items-center nav-hover-red" to="/1" style={{fontSize: '15px'}}><i className="fas fa-book me-3 text-secondary" style={{width: '20px'}}></i>Sách tiếng Việt</NavLink>
                                    <NavLink className="dropdown-item py-2 px-4 fw-medium text-dark d-flex align-items-center nav-hover-red" to="/2" style={{fontSize: '15px'}}><i className="fas fa-globe-americas me-3 text-secondary" style={{width: '20px'}}></i>Foreign Books</NavLink>
                                    <NavLink className="dropdown-item py-2 px-4 fw-medium text-dark d-flex align-items-center nav-hover-red" to="/3" style={{fontSize: '15px'}}><i className="fas fa-pen-nib me-3 text-secondary" style={{width: '20px'}}></i>Văn phòng phẩm</NavLink>
                                    <div className="dropdown-divider my-2"></div>
                                    <NavLink className="dropdown-item py-2 px-4 fw-medium text-danger d-flex align-items-center" to="/danh-sach-yeu-thich" style={{fontSize: '15px'}}><i className="fas fa-heart me-3" style={{width: '20px'}}></i>Sách yêu thích</NavLink>
                                </div>
                            )}
                        </div>

                        {/* Thanh tìm kiếm */}
                        <form className="d-flex align-items-center w-100" onSubmit={handleSubmit} style={{ border: '2px solid #C92127', borderRadius: '8px', overflow: 'hidden', height: '42px', backgroundColor: '#fff' }}>
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
                                style={{ backgroundColor: '#C92127', color: 'white', borderRadius: '0', height: '100%' }}
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
                            <div style={{height: '28px', display: 'flex', alignItems: 'flex-end'}}><i className="far fa-bell fs-4"></i></div>
                            <span style={{ fontSize: '12px', fontWeight: '500', marginTop: '4px' }}>Thông báo</span>
                        </div>

                        {/* Giỏ hàng */}
                        <NavLink to="/cart" className="nav-icon-wrapper nav-hover-red position-relative">
                            <div style={{height: '28px', display: 'flex', alignItems: 'flex-end'}}><i className="fas fa-shopping-cart fs-4"></i></div>
                            <span className="position-absolute badge rounded-pill bg-warning text-dark border border-white" style={{ top: '-2px', right: '15px', fontSize: '10px', padding: '3px 6px' }}>
                                3
                            </span>
                            <span style={{ fontSize: '12px', fontWeight: '500', marginTop: '4px' }}>Giỏ hàng</span>
                        </NavLink>

                        {/* Tài khoản (UserProfile) */}
                        <div className="nav-icon-wrapper nav-hover-red">
                            <div style={{height: '28px', display: 'flex', alignItems: 'flex-end'}}>
                                <UserProfile />
                            </div>
                            <span style={{ fontSize: '12px', fontWeight: '500', marginTop: '4px' }}>Tài khoản</span>
                        </div>

                        {/* Dịch Ngôn ngữ (Có Cờ) */}
                        <div className="nav-icon-wrapper nav-hover-red d-none d-lg-flex dropdown">
                            <div data-bs-toggle="dropdown" aria-expanded="false" className="d-flex align-items-center rounded border px-2 py-1 mt-1" style={{borderColor: '#ddd', height: '32px'}}>
                                <img src="https://flagcdn.com/w20/vn.png" alt="VN" style={{width: '20px', borderRadius: '2px'}}/>
                                <i className="fas fa-chevron-down ms-2 text-secondary" style={{fontSize: '10px'}}></i>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 rounded-3" style={{minWidth: '130px', padding: '8px'}}>
                                <li><a className="dropdown-item py-2 fw-medium text-dark rounded-2 nav-hover-red" style={{fontSize: '14px'}} href="#"><img src="https://flagcdn.com/w20/vn.png" alt="VN" className="me-2" style={{width: '20px'}}/> Tiếng Việt</a></li>
                                <li><a className="dropdown-item py-2 fw-medium text-dark rounded-2 nav-hover-red mt-1" style={{fontSize: '14px'}} href="#"><img src="https://flagcdn.com/w20/us.png" alt="EN" className="me-2" style={{width: '20px'}}/> English</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Navbar;