import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="about">
        <div className="container">
          <div className="aboutcont d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center text-uppercase fw-bolder">Contact Section</h1>
            <div className="linecon d-flex align-items-center mb-3">
              <div className="line bg-dark me-3"></div>
              <div className="star"><i className="fa-solid fa-star text-dark"></i></div>
              <div className="line bg-dark ms-3"></div>
            </div>
          </div>
          <div className="contact d-flex align-items-center justify-content-center">
            <div className="inputs d-flex flex-column w-75 p-3">
              {/* Username */}
              <div className="my-1">
                <label 
                  htmlFor="username" 
                  className={`form-label ${form.username ? 'visible' : ''}`}>
                  Username:
                </label>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  className="form-control" 
                  placeholder="username" 
                  value={form.username}
                  onChange={handleChange}/>
              </div>

              {/* Email */}
              <div className="my-1">
                <label 
                  htmlFor="email" 
                  className={`form-label ${form.email ? 'visible' : ''}`}>
                  Email:
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="email" 
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="my-1">
                <label 
                  htmlFor="message" 
                  className={`form-label ${form.message ? 'visible' : ''}`}>
                  Message:
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  className="form-control" 
                  placeholder="message" 
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="btn d-flex justify-content-start">
                <button className="btn btn-primary my-3">Send message</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}