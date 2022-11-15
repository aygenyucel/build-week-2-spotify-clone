const navbar = document.querySelector("#navbar-container");
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
