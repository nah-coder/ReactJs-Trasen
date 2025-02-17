import React from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng
import Star from "../../components/Layout/component/Star/Star";
import { useState, useEffect } from "react";
import request from '../../api/Request';
function SanPham() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await request.get("Product");
        setData(res.data);
      } catch (error) {
      }
    };
    getNews();
  }, []);
  return (
    <>
      <section>
        <div>
          <div className="view5-header relative">
            <div className="view5-nen" style={{ paddingTop: "2%" }}>
              <img
                src="../images/xanh.png"
                alt="xanh"
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="view5-sanpham absolute"
              style={{ padding: "9% 41%" }}
            >
              <span className="view5-sanphamcon" style={{ fontSize: 50 }}>
                SẢN PHẨM
              </span>
            </div>
          </div>
          <div className="view5-midall " style={{ margin: "2% 13%" }}>
            <div className="view5-mid">
              <div>
                <p
                  className="view5-trangchu"
                  style={{
                    color: "rgb(158, 158, 158)",
                    fontSize: 12,
                    paddingBottom: "2%",
                  }}
                >
                  Trang chủ &gt; Sản phẩm
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  className="view5-sanphamconn "
                  style={{ fontSize: 30, paddingBottom: "1%" }}
                >
                  SẢN PHẨM
                </p>
                <div>
                  <input type="text" id="search" placeholder="Tìm Kiếm" />
                  <button type="button" onclick="search()">
                    Tìm Kiếm
                  </button>
                </div>
              </div>
              <div>
                <hr />
                <p
                  className="view5-boloc"
                  style={{
                    fontSize: 12,
                    color: "rgb(158, 158, 158)",
                    padding: "2% 0%",
                  }}
                >
                  Bộ lọc sản phẩm
                </p>
              </div>
            </div>
            <div className="view5-bot">
              <div className="view5-botmenu d-flex">
                <div className="view5-botleft">
                  <div className="view5-checkbox">
                    <p className="view5-botsp">Loại sản phẩm</p>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Xanh Thái Nguyên
                    </label>{" "}
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Oolong
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Shan Tuyết
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Sen
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Lài
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Thảo Dược
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Dụng cụ pha trà
                    </label>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Nước pha trà
                    </label>
                    <br />
                    <br />
                    <label className="view5-botsp" htmlFor="text">
                      GIÁ THÀNH
                    </label>
                    <br />
                    <br />
                    <progress max={100} value={35} />
                    <br />
                    <br />
                    <p>Từ 50.000 đến 200.000 </p>
                    <br />
                  </div>
                  <div>
                    <p className="view5-botsp">Thương hiệu</p>
                    <br />
                    <input type="checkbox" name="giải khát" id="cktrà" />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Sen Cương Xanh
                    </label>{" "}
                    <br />
                    <input
                      type="checkbox"
                      name="giải khát"
                      id="cktrà"
                      defaultChecked=""
                    />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Sen Tây Hồ
                    </label>{" "}
                    <br />
                    <input
                      type="checkbox"
                      name="giải khát"
                      id="cktrà"
                      defaultChecked=""
                    />
                    <label className="view5-bottra" htmlFor="cktrà">
                      Trà Lộc Tân
                    </label>{" "}
                    <br />
                  </div>
                </div>
                <div className="view5-botright">
                  <div className="listProduct d-flex">
                    {data.map((item)=>(
                      <div className="product-item position-rel ">
                      <div className="top-product position-rel">
                        <div className="sao d-flex">
                          <Star />
                        </div>
                        <div className="product-image">
                          <Link to="/ChiTietSP">
                            <img className="images" src={item.Image} alt="images " style={{ width: "71%" }} />
                          </Link>
                        </div>
                        <div className="product-sale ">
                          <p style={{ fontSize: "75%" }}>{item.Sale}</p>
                        </div>
                      </div>
                      <div className="mid-product ">
                        <h4 className="product-cate text-center">
                        {item.Name}
                        </h4>
                        <div className="giá text-center d-flex">
                          <span>{item.Price} VND</span>
                          <span>{item.Weight} g</span>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SanPham;
