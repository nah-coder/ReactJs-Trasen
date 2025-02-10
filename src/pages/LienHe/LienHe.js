import React from "react";

function LienHe() {
  return (
    <section>
      <div className="view4-body d-flex relative">
        <div className="view4-image">
          <img
            src="../images/banner4.jpg"
            alt="banner4"
            style={{ width: "100%" }}
          />
        </div>
        <div className="view4-form absolute">
          <h2 className="view4-input1">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <div className="view4-input">
            <input
              className="text"
              type="text"
              id="txt"
              name="txt"
              placeholder="Họ tên"
            />
          </div>
          <div className="view4-input">
            <input
              className="text"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="view4-input">
            <input
              className="text"
              type="dienthoai"
              name="dienThoai"
              id="dienThoai"
              pattern
              placeholder="Số điện thoại"
            />
          </div>
          <div className="view4-input">
            <textarea
              className="text"
              name="noidung"
              id="noidung"
              cols="21px"
              rows="1px"
              placeholder="Nội dung"
              defaultValue={""}
            />
          </div>
          <div className="button">
            <div className="view4-bottom">
              <button
                className="bottom-con"
                style={{ backgroundColor: "rgb(173, 221, 14)" }}
                cols="21px"
                rows="1px"
                onclick="prechecklogin()"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LienHe;
