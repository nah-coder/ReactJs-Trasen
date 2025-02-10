import React from "react";

function Footer() {
  return (
    <div>
      <div className="view1-footer">
        <div className="tong2div relative">
          <div className="view1-image">
            <img
              src="../images/fotter.png"
              alt="footer"
              style={{ width: "100%" }}
            />
          </div>
          <div className="menu-bottom absolute">
            <ul className="menu d-flex letrai ">
              <li className="content d-flex w-100">
                <ul>
                  <img
                    src="../images/logophongtra.png"
                    alt="phong tra "
                    style={{ width: "70%" }}
                  />
                  <li>
                    <a href=""> 7999-999-999</a>
                  </li>
                  <li>
                    <a href=""> Trasenbachdiep@gmail.com</a>
                  </li>
                  <li>
                    <a href=""> Số 12, Quảng An , Hồ Tây , Hà Nội</a>
                  </li>
                </ul>
              </li>
              <li className="content d-flex w-100 " style={{ paddingLeft: 58 }}>
                <ul style={{ padding: "31px 0px" }}>
                  <h3 style={{ fontSize: "125%!important" }}>VỀ CHÚNG TÔI</h3>
                  <li>
                    <a className="menucon" href="">
                      {" "}
                      Giới Thiệu
                    </a>
                  </li>
                  <li>
                    <a className="menucon" href="">
                      {" "}
                      Sản Phẩm
                    </a>
                  </li>
                  <li>
                    <a className="menucon" href="">
                      Tin Tức
                    </a>
                  </li>
                </ul>
              </li>
              <li className="content d-flex w-100">
                <ul style={{ padding: "31px 0px" }}>
                  <h3 style={{ fontSize: "125%!important" }}>Liên Hệ</h3>
                  <li>
                    <img
                      src="../images/yt.png"
                      alt="youtube"
                      style={{ width: "5%" }}
                    />
                    <img
                      src="../images/ig.png"
                      alt="instagram"
                      style={{ width: "5%" }}
                    />
                    <img
                      src="../images/images.png"
                      alt="facebook"
                      style={{ width: "5%" }}
                    />
                  </li>
                  <li>
                    <a className="menucon" href="">
                      {" "}
                      Copynight 2010-2020
                    </a>
                  </li>
                  <li>
                    <a className="menucon" href="">
                      Trà Sen Bach Diep. all night
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
