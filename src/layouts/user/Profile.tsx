import React, { useState, useEffect, useRef } from 'react';
import './UserProfile.css';
import PopupDangNhap from './PopupDangNhap';
import { useNavigate } from 'react-router-dom';
import { layThongTinCaNhan } from '../../api/ThongTinCaNhanApi';

interface ThongTinTaiKhoan {
  ten: string, hoDem: string, gioiTinh: string, anhDaiDien: string, email: string
}

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [popupTab, setPopupTab] = useState<'login' | 'register'>('login'); 

  const dropdownRef = useRef<HTMLDivElement>(null);
  const accessToken = localStorage.getItem("accessToken");
  const [thongTinNguoiDung, setThongTinNguoiDung] = useState<ThongTinTaiKhoan | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      layThongTinCaNhan().then(data => setThongTinNguoiDung(data)).catch(err => console.error(err));
    }
  }, [accessToken]);

  // Click Đăng nhập trong Menu -> Hiện Popup
  const handleDangNhapClick = () => {
    setIsOpen(false); 
    setPopupTab('login'); 
    setIsLoginModalOpen(true); 
  }

  // Click Đăng ký trong Menu -> Hiện Popup
  const handleDangKyClick = () => {
    setIsOpen(false); 
    setPopupTab('register'); 
    setIsLoginModalOpen(true); 
  }

  // ==========================================
  // SỬA Ở ĐÂY: Bấm thẳng vào icon -> Chuyển trang
  // ==========================================
  const handleAvatarClick = () => {
    if (!accessToken) {
        setIsOpen(false);
        navigate("/dang-nhap"); // Bay thẳng sang trang đăng nhập riêng
    } else {
        navigate("/profile"); // Nếu đăng nhập rồi thì sang trang hồ sơ cá nhân
    }
  }

  const handleDangXuat = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    await fetch('http://localhost:8080/tai-khoan/logout', {
        method: 'POST', headers: { 'content-type': "application/json" },
        body: JSON.stringify({ refreshToken: refreshToken })
    });
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div 
      className="user-profile-container position-relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ display: 'flex', alignItems: 'center', height: '100%' }}
    >
      <span
        className="nav-link"
        onClick={handleAvatarClick} 
        style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center' }}
      >
        {accessToken && thongTinNguoiDung ? (
          <img src={thongTinNguoiDung.anhDaiDien} alt="Avatar" className="rounded-circle" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
        ) : (
          <i className="fas fa-user-circle fs-3 text-secondary"></i>
        )}
      </span>

      {isOpen && (
        <div style={{ position: "absolute", top: "30px", right: 0, width: "250px", height: "20px", background: "transparent", zIndex: 99 }}></div>
      )}

      {isOpen && (
        <div className="profile-dropdown shadow-lg rounded-3 border-0 p-0" style={{ position: "absolute", top: "50px", right: 0, width: "280px", backgroundColor: "#fff", zIndex: 100, overflow: 'hidden' }}>
          {accessToken && thongTinNguoiDung ? (
            <>
              <div className="bg-light p-3 border-bottom d-flex align-items-center">
                 <img src={thongTinNguoiDung.anhDaiDien} alt="Avatar" className="rounded-circle border border-2 border-white shadow-sm me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                 <div className="text-start">
                    <p className="mb-0 fw-bold text-dark">{thongTinNguoiDung.hoDem + " " + thongTinNguoiDung.ten}</p>
                    <p className="text-muted small mb-0" style={{fontSize: "12px"}}>{thongTinNguoiDung.email}</p>
                 </div>
              </div>
              <div className="p-2">
                  <button className="dropdown-item py-2 px-3 rounded text-start" onClick={() => navigate("/profile")}>
                      <i className="fas fa-user me-3 text-primary"></i> Tài khoản của tôi
                  </button>
                  <button className="dropdown-item py-2 px-3 rounded text-start" onClick={() => navigate("/don-hang")}>
                      <i className="fas fa-clipboard-list me-3 text-success"></i> Đơn mua của tôi
                  </button>
                  <hr className="dropdown-divider my-2" />
                  <button className="dropdown-item py-2 px-3 rounded text-start text-danger fw-bold" onClick={handleDangXuat}>
                      <i className="fas fa-sign-out-alt me-3"></i> Đăng xuất
                  </button>
              </div>
            </>
          ) : (
            <div className="p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-user-circle text-secondary" style={{fontSize: '50px'}}></i>
                <h6 className="mt-3 mb-1 fw-bold text-dark">Xin chào quý khách</h6>
                <p className="text-muted small">Vui lòng đăng nhập hoặc đăng ký</p>
              </div>
              <div className="d-grid gap-2">
                  <button className="btn btn-danger fw-bold" onClick={handleDangNhapClick}>
                    Đăng nhập
                  </button>
                  <button className="btn btn-outline-danger fw-bold" onClick={handleDangKyClick}>
                    Đăng ký tài khoản
                  </button>
              </div>
            </div>
          )}
        </div>
      )}

      <PopupDangNhap 
         isOpen={isLoginModalOpen} 
         onClose={() => setIsLoginModalOpen(false)} 
         initialTab={popupTab}
      />
    </div>
  );
};

export default UserProfile;