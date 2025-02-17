import React from 'react';

function BootstrapCarousel() {
  return (
    <div className="bootstrap relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" style={{ backgroundColor: 'green' }}></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style={{ backgroundColor: 'green' }}></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" style={{ backgroundColor: 'green' }}></li>
        </ol>
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="carousel-son relative">
              <img className="d-block w-100" src="../images/banner.png" alt="First slide" />
            </div>
            <div className="top-content absolute" style={{ margin: '9% 20%' }}>
              <span style={{ fontSize: '1.5rem!important' }}>TRÀ ƯỚP SEN TÂY HỒ</span>
            </div>
            <div className="topp-content absolute" style={{ margin: '16% 20%', width: '20%' }}>
              <span style={{ fontSize: '60%!important' }}>
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
              </span>
            </div>
            <div className="view7-top absolute" style={{ margin: '21% 20%' }}>
              <button className="bottom-con" style={{ backgroundColor: 'rgb(173, 221, 14)', width: '150%' }} cols="21px" rows="1px">
                THỬ NGAY
              </button>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="carousel-son relative">
              <img className="d-block w-100" src="../images/banner.png" alt="Second slide" />
            </div>
            <div className="top-content absolute" style={{ margin: '9% 20%' }}>
              <span style={{ fontSize: '1.5rem!important' }}>TRÀ ƯỚP SEN TÂY HỒ</span>
            </div>
            <div className="topp-content absolute" style={{ margin: '16% 20%', width: '20%' }}>
              <span style={{ fontSize: '60%!important' }}>
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
              </span>
            </div>
            <div className="view7-top absolute" style={{ margin: '21% 20%' }}>
              <button className="bottom-con" style={{ backgroundColor: 'rgb(173, 221, 14)', width: '150%' }} cols="21px" rows="1px">
                THỬ NGAY
              </button>
            </div>
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <div className="carousel-son relative">
              <img className="d-block w-100" src="../images/banner.png" alt="Third slide" />
            </div>
            <div className="top-content absolute" style={{ margin: '9% 20%' }}>
              <span style={{ fontSize: '1.5rem!important' }}>TRÀ ƯỚP SEN TÂY HỒ</span>
            </div>
            <div className="topp-content absolute" style={{ margin: '16% 20%', width: '20%' }}>
              <span style={{ fontSize: '60%!important' }}>
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen Bách Diệp Tây Hồ và vị đậm đà của trà Tân Cương
              </span>
            </div>
            <div className="view7-top absolute" style={{ margin: '21% 20%' }}>
              <button className="bottom-con" style={{ backgroundColor: 'rgb(173, 221, 14)', width: '150%' }} cols="21px" rows="1px">
                THỬ NGAY
              </button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default BootstrapCarousel;
