import React from 'react'
import logo from '../Layout/img/download.png'
export default function startFramework() {
 
    return (
    <>
    <div className="section  ">
    <div className="container  ">
    <div className="sectioncon d-flex flex-column align-items-center justify-content-center text-center">
    <img className='my-5' src={logo} alt="logo" />
    <h1 className='text-light text-uppercase fa-bolder my-3'>start Framework</h1>
    <div className="linecon d-flex align-items-center ">
    <div className="line bg-light me-3 "></div>
    <div className="star"><i className='fa-solid fa-star text-light '></i></div>
    <div className="line bg-light ms-3"></div>
    </div>
    <p className='text-light mb-4 mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  </div>

</>
)}


