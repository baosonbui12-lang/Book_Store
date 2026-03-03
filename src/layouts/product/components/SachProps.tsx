import React, { useEffect, useState } from "react";
import "./SachpropCss.css";
import BookModel from "../../../model/BookModel";
import HinhAnhModel from "../../../model/HinhAnhModel";
import { layToanBoAnh } from "../../../api/HinhAnhApi";
import { Link, NavLink } from "react-router-dom";
import starRating from "../../utils/Rating";
import dinhDangSo from "../../utils/DinhDangSo";

interface SachProps {
  sach: BookModel;
}

const SachProps: React.FC<SachProps> = (props) => {
  const maSach: number = props.sach?.maSach;
  const [danhSachHinhAnh, setDanhSachHinhAnh] = useState<HinhAnhModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);
  const [hienSoLuong, setHienSoLuong] = useState<boolean>(false);
  const [soLuong, setSoLuong] = useState<number>(1);
  const [wishLove, setWishLove] = useState(false);
  const toiDa = props.sach?.soLuong;

  useEffect(() => {
    layToanBoAnh(maSach)
      .then((hinhAnhData) => {
        setDanhSachHinhAnh(hinhAnhData);
        setDangTaiDuLieu(false);
      })
      .catch((error) => {
        setDangTaiDuLieu(false);
        setBaoLoi(error.message);
      });
  }, [maSach]);

  const check = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const respone = await fetch(
      `http://localhost:8080/wish-love/check?maSach=${props.sach?.maSach}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (respone.ok) {
      const data = await respone.json();
      setWishLove(data);
    }
  };

  useEffect(() => {
    check();
  }, [props.sach?.maSach]);

  const handleAddToCart = async () => {
    const accessToken = localStorage.getItem("accessToken");
    await fetch("http://localhost:8080/cart/add-to-cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        maSach: props.sach?.maSach,
        soLuong: soLuong,
      }),
    })
      .then((respone) => {
        if (respone.ok) {
          alert("đã thêm sách vào giỏ hàng của bạn");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToWishLove = async () => {
    const accessToken = localStorage.getItem("accessToken");
    await fetch("http://localhost:8080/wish-love/add-to-wish-love", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ maSach: props.sach?.maSach }),
    })
      .then((respone) => {
        if (respone.ok) {
          setWishLove(!wishLove);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (dangTaiDuLieu)
    return (
      <div className="col-md-3 mt-3">
        <h5>Đang tải...</h5>
      </div>
    );
  if (baoLoi)
    return (
      <div className="col-md-3 mt-3">
        <h5>Lỗi tải dữ liệu</h5>
      </div>
    );

  return (
    <div className="col-md-3 mt-3">
      <div className="card book-card h-100 shadow-sm border-0 overflow-hidden">
        {/* IMAGE SECTION - Không padding để ảnh tràn viền */}
        <NavLink
          to={`/sach/${props.sach?.maSach}`}
          className="book-img-wrapper"
        >
          {danhSachHinhAnh[0]?.duLieuAnh ? (
            <img
              src={danhSachHinhAnh[0]?.duLieuAnh}
              alt={props.sach?.tenSach}
              className="card-img-top book-img"
            />
          ) : (
            <div className="no-image">Không có ảnh</div>
          )}
        </NavLink>

        {/* BODY SECTION */}
        <div className="card-body d-flex flex-column text-center p-3">
          <div className="mb-2">
            {starRating(props.sach?.trungBinhXepHang || 0)}
          </div>

          <NavLink
            to={`/sach/${props.sach?.maSach}`}
            className="book-title text-decoration-none text-dark fw-bold mb-2"
          >
            {props.sach.tenSach}
          </NavLink>

          <div className="price-box mb-3">
            <del className="text-muted small d-block">
              {dinhDangSo(props.sach?.giaNiemYet)}đ
            </del>
            <div className="text-danger fw-bold fs-5">
              {dinhDangSo(props.sach?.giaBan)}đ
            </div>
          </div>

          <div className="mt-auto d-flex gap-2">
            <button
              className={`btn ${wishLove ? "btn-danger" : "btn-outline-danger"} flex-fill`}
              onClick={handleAddToWishLove}
            >
              <i className={`fa${wishLove ? "s" : "r"} fa-heart`}></i>
            </button>

            <button
              className="btn btn-danger flex-fill"
              onClick={() => setHienSoLuong(!hienSoLuong)}
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>

          {hienSoLuong && (
            <div className="quantity-box mt-3 p-2 border rounded bg-light d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary rounded-circle"
                  style={{ width: "26px", height: "26px", lineHeight: "1" }}
                  onClick={() => setSoLuong(Math.max(1, soLuong - 1))}
                >
                  −
                </button>
                <span className="fw-bold">{soLuong}</span>
                <button
                  className="btn btn-sm btn-outline-secondary rounded-circle"
                  style={{ width: "26px", height: "26px", lineHeight: "1" }}
                  onClick={() => setSoLuong(Math.min(toiDa || 1, soLuong + 1))}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-success btn-sm px-2"
                onClick={handleAddToCart}
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SachProps;
