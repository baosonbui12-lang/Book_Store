import React, { useState, useEffect } from "react";

interface PopupDangNhapProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'register'; // Cho phép truyền vào mở mặc định tab nào
}

const PopupDangNhap: React.FC<PopupDangNhapProps> = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);
  
  // Mỗi khi Popup mở lên, tự động chuyển về đúng Tab mà user đã click
  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  // --- STATE ĐĂNG NHẬP ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [thongBaoLogin, setThongBaoLogin] = useState("");

  // --- STATE ĐĂNG KÝ ---
  const [tenDangNhap, setTenDangNhap] = useState("");
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [matKhauLapLai, setMatKhauLapLai] = useState("");
  const [hoDem, setHoDem] = useState("");
  const [ten, setTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [thongBaoRegister, setThongBaoRegister] = useState("");

  if (!isOpen) return null;

  // XỬ LÝ ĐĂNG NHẬP
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:8080/tai-khoan/dang-nhap", {
      method: "POST", headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((respone) => {
        if (respone.ok) {
          setThongBaoLogin("Đăng nhập thành công!");
          return respone.json();
        } else throw new Error("Thất bại");
      })
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setTimeout(() => { onClose(); window.location.reload(); }, 1000);
      })
      .catch(() => setThongBaoLogin("Tài khoản hoặc mật khẩu không chính xác!"));
  };

  // XỬ LÝ ĐĂNG KÝ
  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (matKhau !== matKhauLapLai) {
        setThongBaoRegister("Mật khẩu nhập lại không khớp!");
        return;
    }
    try {
        const respone = await fetch(`http://localhost:8080/tai-khoan/dang-ky`, {
            method: 'POST', headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ tenDangNhap, email, matKhau, hoDem, ten, soDienThoai, gioiTinh: "Nam" })
        });
        if (respone.ok) {
            setThongBaoRegister("Đăng ký thành công! Đang chuyển sang Đăng nhập...");
            setTimeout(() => { setActiveTab('login'); setThongBaoRegister(""); }, 2000);
        } else setThongBaoRegister("Đã xảy ra lỗi, tên đăng nhập hoặc email có thể đã tồn tại!");
    } catch (error) {
        setThongBaoRegister("Lỗi kết nối mạng!");
    }
  };

  // Click vào nền đen để đóng Popup
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        {/* HEADER TABS */}
        <div style={styles.tabContainer}>
          <div style={{ ...styles.tab, ...(activeTab === 'login' ? styles.activeTab : {}) }} onClick={() => setActiveTab('login')}>
            Đăng nhập
          </div>
          <div style={{ ...styles.tab, ...(activeTab === 'register' ? styles.activeTab : {}) }} onClick={() => setActiveTab('register')}>
            Đăng ký
          </div>
        </div>

        {/* BODY TABS */}
        <div style={{ padding: "20px 30px" }}>
            {/* ====== TAB ĐĂNG NHẬP ====== */}
            {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label style={styles.label}>Tên đăng nhập / Email</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label style={styles.label}>Mật khẩu</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  {thongBaoLogin && <div className="mb-3 text-center" style={{ color: thongBaoLogin.includes("thành công") ? "green" : "red", fontSize: "14px" }}>{thongBaoLogin}</div>}
                  <button type="submit" className="btn w-100" style={styles.actionBtn}>Đăng nhập</button>
                </form>
            )}

            {/* ====== TAB ĐĂNG KÝ ====== */}
            {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit} style={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden' }}>
                  <div className="row g-2 mb-3">
                      <div className="col-6">
                        <label style={styles.label}>Tên đăng nhập</label>
                        <input type="text" className="form-control form-control-sm" value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)} required />
                      </div>
                      <div className="col-6">
                        <label style={styles.label}>Email</label>
                        <input type="email" className="form-control form-control-sm" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="col-6">
                        <label style={styles.label}>Mật khẩu</label>
                        <input type="password" className="form-control form-control-sm" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required />
                      </div>
                      <div className="col-6">
                        <label style={styles.label}>Nhập lại mật khẩu</label>
                        <input type="password" className="form-control form-control-sm" value={matKhauLapLai} onChange={(e) => setMatKhauLapLai(e.target.value)} required />
                      </div>
                      <div className="col-6">
                        <label style={styles.label}>Họ đệm</label>
                        <input type="text" className="form-control form-control-sm" value={hoDem} onChange={(e) => setHoDem(e.target.value)} required />
                      </div>
                      <div className="col-6">
                        <label style={styles.label}>Tên</label>
                        <input type="text" className="form-control form-control-sm" value={ten} onChange={(e) => setTen(e.target.value)} required />
                      </div>
                      <div className="col-12">
                        <label style={styles.label}>Số điện thoại</label>
                        <input type="text" className="form-control form-control-sm" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} required />
                      </div>
                  </div>
                  
                  {thongBaoRegister && <div className="mb-3 text-center" style={{ color: thongBaoRegister.includes("thành công") ? "green" : "red", fontSize: "14px" }}>{thongBaoRegister}</div>}
                  <button type="submit" className="btn w-100" style={styles.actionBtn}>Đăng ký tài khoản</button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 },
  modal: { backgroundColor: "#fff", borderRadius: "12px", width: "480px", maxWidth: "95%", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },
  tabContainer: { display: "flex", backgroundColor: '#f8f9fa', borderBottom: "1px solid #dee2e6" },
  tab: { flex: 1, textAlign: "center", padding: "15px", cursor: "pointer", fontWeight: "bold", color: "#6c757d", fontSize: '16px', transition: '0.2s' },
  activeTab: { color: "#dc3545", borderBottom: "3px solid #dc3545", backgroundColor: '#fff' },
  label: { fontSize: "13px", color: "#495057", marginBottom: "4px", fontWeight: 600 },
  actionBtn: { backgroundColor: "#dc3545", color: "white", fontWeight: "bold", padding: "10px", borderRadius: "8px", border: 'none' },
};

export default PopupDangNhap;