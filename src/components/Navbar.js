import React from "react";
import Logo from "../logo/logo.png";
const Navbar = () => {
  const showNavbar = () => {
    const span = document.querySelectorAll(".hamburger span");
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");
    span[0].classList.toggle("show1");
    span[1].classList.toggle("show2");
    span[2].classList.toggle("show3");
  };

  return (
    <>
      <section id="topbar">
        <div className="container topbar">
          <div className="logo">
            <div className="hamburger" onClick={() => showNavbar()}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>

            <img src={Logo} className="img-fluid img-logo" alt="" />
          </div>

          <div className="user">
            <h5>
              Hallo, <span>Gadjian User</span>
            </h5>
            <div className="photo">
              <span>photo</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sidebar">
        <div className="sidebar">
          <div className="logo">
            <img src={Logo} className="img-fluid img-logo" alt="" />
          </div>

          <div className="menu">
            <ul>
              <li>
                <a href="!#">Beranda</a>
              </li>
              <li>
                <a href="!#" className="active">
                  Personnel List
                </a>
              </li>
              <li>
                <a href="!#">Daily Attendance</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
