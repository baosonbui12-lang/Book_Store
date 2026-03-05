import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#fff' }}> 
            <style>
                {`
                    /* Ép tất cả chữ trong Footer phải căn trái */
                    .footer-body * {
                        text-align: left;
                    }
                    .footer-text {
                        color: #333333;
                        font-size: 14px;
                        line-height: 1.6;
                    }
                    .footer-link {
                        color: #333333;
                        text-decoration: none;
                        font-size: 14px;
                        margin-bottom: 12px;
                        display: block;
                        transition: 0.2s;
                        font-weight: 400;
                    }
                    .footer-link:hover {
                        color: #C92127;
                    }
                    .footer-title {
                        font-size: 16px;
                        font-weight: 700;
                        color: #333333;
                        margin-bottom: 20px;
                        text-transform: uppercase;
                    }
                    .social-icon {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background-color: #555;
                        color: white;
                        margin-right: 12px;
                        font-size: 16px;
                        text-decoration: none;
                        transition: 0.2s;
                    }
                    .social-icon:hover {
                        background-color: #C92127;
                    }
                    /* ÉP CỨNG MARGIN ĐỂ LOGO ĐỐI TÁC KHÔNG DÍNH NHAU */
                    .partner-logo {
                        height: 35px;
                        max-width: 90px;
                        object-fit: contain;
                        margin-right: 100px; 
                        margin-bottom: 15px;
                    }
                `}
            </style>

            {/* 1. THANH ĐĂNG KÝ NHẬN BẢN TIN */}
            <div className="py-4" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        
                        {/* CỘT TRÁI: Bức thư + Chữ  */}
                        <div className="col-md-6 col-lg-5 d-flex align-items-center justify-content-center justify-content-md-end mb-3 mb-md-0 pe-md-5">
                            <i className="far fa-envelope text-secondary" style={{ fontSize: '32px', marginRight: '20px' }}></i>
                            <span className="fw-bold text-secondary" style={{ fontSize: '18px', letterSpacing: '1px' }}>
                                ĐĂNG KÝ NHẬN BẢN TIN
                            </span>
                        </div>
                        
                        {/* CỘT PHẢI: Ô nhập Email + Nút*/}
                        <div className="col-md-6 col-lg-5 ps-md-4">
                            <div className="input-group w-100">
                                <input 
                                    type="email" 
                                    className="form-control px-4 py-2 border-0 shadow-none" 
                                    placeholder="Nhập địa chỉ email của bạn" 
                                    style={{ fontSize: '14.5px', borderRadius: '4px 0 0 4px', height: '44px' }} 
                                />
                                <button 
                                    className="btn text-white px-4 fw-bold" 
                                    style={{ backgroundColor: '#f7941e', fontSize: '14.5px', borderRadius: '0 4px 4px 0', height: '44px' }}
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. NỘI DUNG CHÍNH CỦA FOOTER */}
            <div className="footer-body pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        
                        {/* ================= CỘT BÊN TRÁI ================= */}
                        <div className="col-lg-4 border-end pe-lg-4 mb-4 mb-lg-0 text-start">
                            
                            {/* Logo chính*/}
                            <div className="text-center mb-4">
                                <Link to="/" className="text-decoration-none d-inline-block">
                                    <img src="/images/Logo bookstore.png" alt="Bookstore" style={{ height: '90px', objectFit: 'contain' }} />
                                </Link>
                            </div>

                            <div className="footer-text fw-medium">
                                Số 3 Cầu Giấy, Quận Cầu Giấy, Hà Nội<br />
                                Công Ty Cổ Phần Phát Hành Sách - BOOKSTORE<br />
                                Số 3 Cầu Giấy, Hà Nội, Việt Nam
                            </div>

                            <div className="mt-3 footer-text" style={{ fontSize: '13px' }}>
                                Bookstore.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Bookstore trên toàn quốc.
                            </div>

                            {/* Logo Bộ Công Thương */}
                            <div className="mt-4">
                                <img src="/images/anh-footer/bocongthuong.png" alt="Bo Cong Thuong" style={{ height: '35px' }} />
                            </div>

                            {/* Mạng xã hội */}
                            <div className="mt-4">
                                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-pinterest-p"></i></a>
                            </div>

                            {/* Tải App*/}
                            <div className="mt-4 d-flex justify-content-start">
                                <img src="/images/anh-footer/googleplay.png" alt="Google Play" style={{ height: '35px', cursor: 'pointer', marginRight: '20px' }} />
                                <img src="/images/anh-footer/appstore.png" alt="App Store" style={{ height: '35px', cursor: 'pointer' }} />
                            </div>
                        </div>

                        {/* ================= CỘT BÊN PHẢI ================= */}
                        <div className="col-lg-8 ps-lg-5 text-start">
                            
                            {/* Khối Links */}
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="footer-title">DỊCH VỤ</div>
                                    <Link to="#" className="footer-link">Điều khoản sử dụng</Link>
                                    <Link to="#" className="footer-link">Chính sách bảo mật thông tin cá nhân</Link>
                                    <Link to="#" className="footer-link">Chính sách bảo mật thanh toán</Link>
                                    <Link to="#" className="footer-link">Giới thiệu Bookstore</Link>
                                    <Link to="#" className="footer-link">Hệ thống nhà sách</Link>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="footer-title">HỖ TRỢ</div>
                                    <Link to="#" className="footer-link">Chính sách đổi - trả - hoàn tiền</Link>
                                    <Link to="#" className="footer-link">Chính sách bảo hành - bồi hoàn</Link>
                                    <Link to="#" className="footer-link">Chính sách vận chuyển</Link>
                                    <Link to="#" className="footer-link">Chính sách khách sỉ</Link>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="footer-title">TÀI KHOẢN CỦA TÔI</div>
                                    <Link to="/dang-nhap" className="footer-link">Đăng nhập/Tạo mới tài khoản</Link>
                                    <Link to="#" className="footer-link">Thay đổi địa chỉ khách hàng</Link>
                                    <Link to="/profile" className="footer-link">Chi tiết tài khoản</Link>
                                    <Link to="/don-hang" className="footer-link">Lịch sử mua hàng</Link>
                                </div>
                            </div>

                            {/* Khối Liên hệ */}
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="footer-title mb-3">LIÊN HỆ</div>
                                    <div className="row footer-text fw-medium">
                                        <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
                                            <i className="fas fa-map-marker-alt fs-5 me-2 text-secondary"></i>
                                            <span>Số 3 Cầu Giấy, Hà Nội</span>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
                                            <i className="fas fa-envelope fs-5 me-2 text-secondary"></i>
                                            <span>cskh@bookstore.com.vn</span>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center">
                                            <i className="fas fa-phone-alt fs-5 me-2 text-secondary"></i>
                                            <span>032 553 2335</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Khối Logo Đối Tác & Vận chuyển */}
                            <div className="row mt-4 pt-2">
                                <div className="col-12">
                                    {/* Hàng 1: Vận chuyển */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-start">
                                        <img src="/images/anh-footer/ex.png" className="partner-logo" alt="EX" />
                                        <img src="/images/anh-footer/viettelpost.png" className="partner-logo" alt="ViettelPost" />
                                        <img src="/images/anh-footer/giaohangnhanh.png" className="partner-logo" alt="GHN" />
                                        <img src="/images/anh-footer/vietnampost.png" className="partner-logo" alt="VNPost" />
                                    </div>
                                    {/* Hàng 2: Thanh toán */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-start mt-2">
                                        <img src="/images/anh-footer/vnpay.png" className="partner-logo" alt="VNPay" />
                                        <img src="/images/anh-footer/momo.png" className="partner-logo" alt="Momo" />
                                        <img src="/images/anh-footer/shopeepay.png" className="partner-logo" alt="ShopeePay" />
                                        <img src="/images/anh-footer/zalopay.png" className="partner-logo" alt="ZaloPay" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* 3. DÒNG BẢN QUYỀN CUỐI CÙNG                    */}
            <div className="py-3" style={{ backgroundColor: '#e9ecef', color: '#777', fontSize: '12px', textAlign: 'center' }}>
                Giấy chứng nhận Đăng ký Kinh doanh số 0123456789 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 05/05/2006, đăng ký thay đổi lần thứ 10, ngày 06/03/2026.
            </div>
        </div>
    );
};

export default Footer;