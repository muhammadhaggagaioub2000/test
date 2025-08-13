import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="Footer bg-dark text-light py-5  ">
    <div className="container">
        <div className="row d-flex  justify-content-center text-center py-5">
            <div className="col-md-4 col-lg-4 col-xl-4">
                <div className="item">
                    <h1 className='h3'>LOCATION</h1>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="item">
                <h1 className='h3'>AROUND THE WEB</h1>
                <div className="icons">
                <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="item">
            <h1 className='h3'>ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="footertail bg-dark py-3 text-center text-light">
        <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-12">
        <div className="item">
        <p>Copyright © Your Website 2023</p>
        </div>
        </div>
        </div>
        </div>
        
        </>
  )
}   
