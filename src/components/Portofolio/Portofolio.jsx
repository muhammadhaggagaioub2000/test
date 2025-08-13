import React, { useState } from 'react';

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleClick(imageSrc) {
    setSelectedImg(imageSrc);
  }

  function closeModal() {
    setSelectedImg(null);
  }
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="portfoliocon d-flex flex-column align-items-center justify-content-center text-center mt-5">
            <h1 className='text-center text-uppercase fw-bolder'>portfolio component</h1>
            <div className="linecon d-flex align-items-center mb-3">
              <div className="line bg-dark me-3"></div>
              <div className="star"><i className='fa-solid fa-star text-dark'></i></div>
              <div className="line bg-dark ms-3"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-5 mb-5">
            {[...Array(6)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <div className="item position-relative" onClick={() => handleClick("https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png")}>
                  <img className='w-100 rounded-2' src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" alt="cabin" />
                  <div className="plus bg-black h-100 w-100 position-absolute top-0 d-flex align-items-center justify-content-center">
                    <i className='fa-solid fa-plus fs-1 text-light'></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImg && (
        <div
          className="modal-overlay p-fixed bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          style={{ zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' }}
          onClick={closeModal}
        >
          <img
            src={selectedImg}
            className="rounded-3 shadow"
            style={{ maxWidth: '80%', maxHeight: '80%', transition: 'transform 0.3s' }}
            alt="Expanded view"
          />
        </div>
      )}
    </>
  );
}