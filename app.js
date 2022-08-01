// Navbar
document.onreadystatechange = function () {
  var lastScrollTop; // This Varibale will store the top position

  const navbar = document.getElementById("navbar"); // Get The NavBar

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
};

/* Footer */

// .footer-section {
//     background: #151414;
//     position: relative;
//   }
//   .footer-cta {
//     border-bottom: 1px solid #373636;
//   }
//   .single-cta i {
//     color: #ff5e14;
//     font-size: 30px;
//     float: left;
//     margin-top: 8px;
//   }
//   .cta-text {
//     padding-left: 15px;
//     display: inline-block;
//   }
//   .cta-text h4 {
//     color: #fff;
//     font-size: 20px;
//     font-weight: 600;
//     margin-bottom: 2px;
//   }
//   .cta-text span {
//     color: #757575;
//     font-size: 15px;
//   }
//   .footer-content {
//     position: relative;
//     z-index: 2;
//   }
//   .footer-pattern img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 330px;
//     background-size: cover;
//     background-position: 100% 100%;
//   }
//   .footer-logo {
//     margin-bottom: 30px;
//   }
//   .footer-logo img {
//     max-width: 200px;
//   }
//   .footer-text p {
//     margin-bottom: 14px;
//     font-size: 14px;
//     color: #7e7e7e;
//     line-height: 28px;
//   }
//   .footer-social-icon span {
//     color: #fff;
//     display: block;
//     font-size: 20px;
//     font-weight: 700;
//     font-family: "Poppins", sans-serif;
//     margin-bottom: 20px;
//   }
//   .footer-social-icon a {
//     color: #fff;
//     font-size: 16px;
//     margin-right: 15px;
//   }
//   .footer-social-icon i {
//     height: 40px;
//     width: 40px;
//     text-align: center;
//     line-height: 38px;
//     border-radius: 50%;
//   }
//   .facebook-bg {
//     background: #3b5998;
//   }
//   .twitter-bg {
//     background: #55acee;
//   }
//   .google-bg {
//     background: #dd4b39;
//   }
//   .footer-widget-heading h3 {
//     color: #fff;
//     font-size: 20px;
//     font-weight: 600;
//     margin-bottom: 40px;
//     position: relative;
//   }
//   .footer-widget-heading h3::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -15px;
//     height: 2px;
//     width: 50px;
//     background: #ff5e14;
//   }
//   .footer-widget ul li {
//     display: inline-block;
//     float: left;
//     width: 50%;
//     margin-bottom: 12px;
//   }
//   .footer-widget ul li a:hover {
//     color: #ff5e14;
//   }
//   .footer-widget ul li a {
//     color: #878787;
//     text-transform: capitalize;
//   }
//   .subscribe-form {
//     position: relative;
//     overflow: hidden;
//   }
//   .subscribe-form input {
//     width: 100%;
//     padding: 14px 28px;
//     background: #2e2e2e;
//     border: 1px solid #2e2e2e;
//     color: #fff;
//   }
//   .subscribe-form button {
//     position: absolute;
//     right: 0;
//     background: #ff5e14;
//     padding: 13px 20px;
//     border: 1px solid #ff5e14;
//     top: 0;
//   }
//   .subscribe-form button i {
//     color: #fff;
//     font-size: 22px;
//     transform: rotate(-6deg);
//   }
//   .copyright-area {
//     background: #202020;
//     padding: 25px 0;
//   }
//   .copyright-text p {
//     margin: 0;
//     font-size: 14px;
//     color: #878787;
//   }
//   .copyright-text p a {
//     color: #ff5e14;
//   }
//   .footer-menu li {
//     display: inline-block;
//     margin-left: 20px;
//   }
//   .footer-menu li:hover a {
//     color: #ff5e14;
//   }
//   .footer-menu li a {
//     font-size: 14px;
//     color: #878787;
//   }
