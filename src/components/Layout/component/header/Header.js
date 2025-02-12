import React from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng

function Header() {
  return (
    <div>
      <nav className="nav d-flex" style={{ padding: "2% 0" }}>
        <div className="logo">
          <img
            src="../images/logophongtra.png"
            alt="phong tra "
            style={{ width: "110%" }}
          />
        </div>
        <div className="menutop-ul">
          <div
            className="menutop-ulcon"
            style={{ alignItems: "center!important" }}
          >
            <ul className="menu-1 d-flex " style={{ margin: "2% 0" }}>
              <li className="item">
                <Link to="/" className="link">Trang chủ</Link>
              </li>
              <li className="item">
                <Link to="/GioiThieu" className="link">Giới thiệu</Link>
              </li>
              <li className="item">
                <Link to="/SanPham" className="link">Sản phẩm</Link>
              </li>
              <li className="item">
                <Link to="/TinTuc" className="link">Tin tức</Link>
              </li>
              <li className="item">
                <Link to="/LienHe" className="link">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
