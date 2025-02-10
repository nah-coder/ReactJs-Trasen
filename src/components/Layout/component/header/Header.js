import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav d-flex" style={{ padding: "2% 0" }}>
        {/* <div class="d-flex"> */}
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
                <a href="../view/tc.html" className="link">
                  Trang chủ
                </a>
              </li>
              <li className="item">
                <a href="../view/gioithieu.html" className="link">
                  Giới thiệu
                </a>
              </li>
              <li className="item">
                <a href="../view/sanpham.html" className="link">
                  Sản phẩm
                </a>
              </li>
              <li className="item">
                <a href="../view/tintuc.html" className="link">
                  Tin tức
                </a>
              </li>
              <li className="item">
                <a href="../view/lienhe.html" className="link">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
