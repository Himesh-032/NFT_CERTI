import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import './index.css';
import './util.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        {/* <div className="login100-pic js-tilt" data-tilt>
        <img src={require('./img-01.png')} />
        </div> */}

        <form className="login100-form validate-form">
          <span className="login100-form-title">Certificate Generator</span>

          <div className="wrap-input100 validate-input" data-validate="Name is required">
            <input className="input100" type="text" name="Student-Name" placeholder="Name" id="name" />
            <span className="symbol-input100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-person" viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Course Name is required">
            <input className="input100" type="text" name="Course-Name" placeholder="Course Name" id="Course" />
            <span className="symbol-input100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-card-checklist" viewBox="0 0 16 16">
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path
                  d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
            </span>
          </div>

          <div className="container-login100-form-btn">
            <button className="login100-form-btn btn-wide btn-normal">
              Generate
            </button>
          </div>

          <div className="text-center p-t-12">
            <span className="txt1"> </span>
            <a className="txt2" href="#"> </a>
          </div>

          <div className="text-center p-t-136">
            <a className="txt2" href="#">
              <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();