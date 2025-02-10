import React from 'react'

function Trangchu() {
  return (
    <>
      <section>
        <div>
          <div className="bootstrap relative">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                  style={{ backgroundColor: "green" }}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                  style={{ backgroundColor: "green" }}
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                  style={{ backgroundColor: "green" }}
                ></li>
              </ol>
              <div className="carousel-inner">
                {/* <div class="carousel-son relative"> */}
                <div className="carousel-item active">
                  <div className="carousel-son relative">
                    <img
                      className="d-block w-100"
                      src="../images/banner.png"
                      alt="First slide"
                    />
                  </div>
                  <div
                    className="top-content absolute"
                    style={{ margin: "9% 20%" }}
                  >
                    <span style={{ fontSize: "1.5rem!important" }}>
                      TRÀ ƯỚP SEN TÂY HỒ
                    </span>
                  </div>
                  <div
                    className="topp-content absolute"
                    style={{ margin: "16% 20%", width: "20%" }}
                  >
                    <span style={{ fontSize: "60%!important" }}>
                      Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen
                      Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
                    </span>
                  </div>
                  <div
                    className="view7-top absolute"
                    style={{ margin: "21% 20%" }}
                  >
                    <button
                      className="bottom-con"
                      style={{
                        backgroundColor: "rgb(173, 221, 14)",
                        width: "150%",
                      }}
                      cols="21px"
                      rows="1px"
                    >
                      THỬ NGAY
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-son relative">
                    <img
                      className="d-block w-100"
                      src="../images/banner.png"
                      alt="Second slide"
                    />
                  </div>
                  <div
                    className="top-content absolute"
                    style={{ margin: "9% 20%" }}
                  >
                    <span style={{ fontSize: "1.5rem!important" }}>
                      TRÀ ƯỚP SEN TÂY HỒ
                    </span>
                  </div>
                  <div
                    className="topp-content absolute"
                    style={{ margin: "16% 20%", width: "20%" }}
                  >
                    <span style={{ fontSize: "60%!important" }}>
                      Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen
                      Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
                    </span>
                  </div>
                  <div
                    className="view7-top absolute"
                    style={{ margin: "21% 20%" }}
                  >
                    <button
                      className="bottom-con"
                      style={{
                        backgroundColor: "rgb(173, 221, 14)",
                        width: "150%",
                      }}
                      cols="21px"
                      rows="1px"
                    >
                      THỬ NGAY
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-son relative">
                    <img
                      className="d-block w-100"
                      src="../images/banner.png"
                      alt="Third slide"
                    />
                  </div>
                  <div
                    className="top-content absolute"
                    style={{ margin: "9% 20%" }}
                  >
                    <span style={{ fontSize: "1.5rem!important" }}>
                      TRÀ ƯỚP SEN TÂY HỒ
                    </span>
                  </div>
                  <div
                    className="topp-content absolute"
                    style={{ margin: "16% 20%", width: "20%" }}
                  >
                    <span style={{ fontSize: "60%!important" }}>
                      Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen
                      Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
                    </span>
                  </div>
                  <div
                    className="view7-top absolute"
                    style={{ margin: "21% 20%" }}
                  >
                    <button
                      className="bottom-con"
                      style={{
                        backgroundColor: "rgb(173, 221, 14)",
                        width: "150%",
                      }}
                      cols="21px"
                      rows="1px"
                    >
                      THỬ NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div>
          <p className="view7-noibat">SẢN PHẨM NỔI BẬT</p>
        </div>
        <div className="view5-botright">
          <div
            className="view5-product view5-productslick d-flex"
            style={{ margin: "0% 15%" }}
          >
            <div className="product-item position-rel ">
              <div className="top-product position-rel">
                <div className="product-image">
                  <a href="../view/tintucphu.html">
                    <img
                      className="images"
                      src="../images/product-1.png"
                      alt="images "
                      style={{ width: "71%" }}
                    />
                  </a>
                </div>
              </div>
              <div className="mid-product ">
                <h5 className="product-cate text-center mb-1r">
                  TRÀ ƯỚP BÔNG SEN
                </h5>
              </div>
            </div>
            <div className="product-item position-rel ">
              <div className="top-product position-rel">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/product-1.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
              </div>
              <div className="mid-product ">
                <h5 className="product-cate text-center mb-1r">
                  TRÀ ƯỚP NHỊ SEN
                </h5>
              </div>
            </div>
            <div className="product-item position-rel ">
              <div className="top-product position-rel">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/product-2.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
              </div>
              <div className="mid-product ">
                <h5 className="product-cate text-center mb-1r">
                  TRÀ SHEN TUYẾT
                </h5>
              </div>
            </div>
            <div className="product-item position-rel ">
              <div className="top-product position-rel">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/product-3.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
              </div>
              <div className="mid-product ">
                <h5 className="product-cate text-center mb-1r">TRÀ ÔLONG</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="view7-mid relative">
          <div className="view7-bachdiep">
            <img
              src="../images/background2.png"
              alt="bách diệp"
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="view7-gioithieu absolute "
            style={{ padding: "17% 43%" }}
          >
            <span style={{ fontSize: "34px!important" }}>GIỚI THIỆU</span>
          </div>
          <div
            className="view7-word absolute"
            style={{ width: "29%", margin: "34% 20%", textAlign: "justify" }}
          >
            <span style={{ fontSize: "74%!important" }}>
              Trà ướp Sen Bách Diệp - tỉnh hoa văn hóa Hà Thành là sự hòa quyện
              tuyệt với giữa hưởng thơm ngan ngát của bông sen Bách diệp Hồ Tây
              và vị đậm đà của trà Tân Cương Thái Nguyên. Qua đôi bàn tay tài
              hoa và bí quyết nghề một truyền nhiều đời của người the tra Tháng
              Long, tạo ra thức quá tỉnh tùy, kết tinh văn hóa ngàn năm Thăng
              Long - Hà Nội
            </span>
          </div>
          <div
            className="view7-midbottom absolute"
            style={{ margin: "44% 20%" }}
          >
            <button
              className="bottom-con"
              style={{ backgroundColor: "rgb(173, 221, 14)", width: "150%" }}
              cols="21px"
              rows="1px"
            >
              ĐỌC THÊM
            </button>
          </div>
          <div className="view7-sdt absolute" style={{ margin: "20% 87%" }}>
            <i style={{ color: "#8eba8e!important" }}>0999.999.999</i>
          </div>
        </div>
        <br />
        <div className="view7 relative">
          <div className="view7-imagebot">
            <img
              src="../images/background view7.jpg"
              alt="view7"
              style={{ width: "100%", height: 900 }}
            />
          </div>
          <div className="view7-nhan absolute" style={{ padding: "0% 39%" }}>
            <span style={{ fontSize: "153%!important" }}>
              NGHỆ NHÂN TRÀ ĐẠO
            </span>
          </div>
          <div
            className="view7-bot absolute d-flex "
            style={{ margin: "4% 12%" }}
          >
            <div className="product-item ">
              <div className="top-product">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/professional-tea-1.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="mid-product ">
                  <span>Nn. Nguyễn Cao Sơn</span>
                </div>
                <div className="view7-content">
                  <span style={{ fontSize: "53%!important" }}>
                    Nguyễn Cao Sơn được chọn làm đại diện quảng bá văn hóa Trà
                    Việt tại ngôi nhà ai văn 87 Mã Mây, Hà Nội
                  </span>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <div className="top-product">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/professional-tea-2.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="mid-product ">
                  <span>Nn. Hướng Anh Sướng</span>
                </div>
                <div className="view7-content">
                  <span style={{ fontSize: "53%!important" }}>
                    Truyền nhân đối thứ 6 của dòng trà Trường Xuân, Hà Nội chia
                    sẻ về nghệ thuật trà đạo, lĩnh vực mà anh dành hen nửa cuộc
                    đời nghiên cứu một sách đam mê.
                  </span>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <div className="top-product">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/professional-tea-3.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="mid-product ">
                  <span>Nn. Nguyễn Thị Dần</span>
                </div>
                <div className="view7-content">
                  <span style={{ fontSize: "53%!important" }}>
                    Vän ty tay chon hoa, tich gan, thuc hiện từng Công đoạn ướp
                    trà sen. Canx chính bởi nghiên trả, bởi yêu nghề nên cô
                    thiếu nữ Hà thành năm sau vẫn say hưởng vị trà sen Tây Hồ
                  </span>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <div className="top-product">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/professional-tea-4.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="mid-product ">
                  <span>Nn. Nguyễn Hoài Linh</span>
                </div>
                <div className="view7-content">
                  <span style={{ fontSize: "53%!important" }}>
                    Vô địch toàn thế giới trong cuộc thi Tea Master Cup
                    International 2018 ve pha trà được tổ chức tại Huế
                  </span>
                </div>
              </div>
            </div>
            <div className="product-item ">
              <div className="top-product">
                <div className="product-image">
                  <img
                    className="images"
                    src="../images/professional-tea-5.png"
                    alt="images "
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="mid-product ">
                  <span>Nn. Viên Trân</span>
                </div>
                <div className="view7-content">
                  <span style={{ fontSize: "53%!important" }}>
                    Sinh ra và lớn lên trong một gia đình quý tộc phong kiến,
                    trong một môi trường mà việc uống trà và trà Cự ngon, cực
                    thượng hạng là điều không bao giờ thiếu trong nhà.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="view7-sectionbottom absolute">
            <div>
              <div style={{ paddingBottom: "25%" }}>
                <span style={{ fontSize: "168%!important" }}>MUA NGAY</span>
              </div>
              <ul
                className="view7-ul d-flex"
                style={{ margin: "0% -169%", marginLeft: "-140%" }}
              >
                <li style={{ width: "76%" }}>
                  <input
                    className="text"
                    style={{ height: "100%", width: "97%" }}
                    type="dienthoai"
                    name="dienThoai"
                    id="dienThoai"
                    pattern=""
                    placeholder="Số điện thoại"
                    cols="21px"
                    rows="1px"
                  />
                </li>
                <li>
                  <div className="view7-bottom">
                    <button
                      className="bottom-con"
                      style={{
                        backgroundColor: "rgb(173, 221, 14)",
                        width: "450%",
                      }}
                      cols="21px"
                      rows="1px"
                    >
                      Gửi
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trangchu