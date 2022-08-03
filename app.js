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
