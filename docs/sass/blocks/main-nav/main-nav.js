const showMobileMenu = () => {
  const mainNav = document.querySelector(".main-nav");

  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".main-nav__toggle")) {
      mainNav.classList.toggle("main-nav--opened");
    }
  });
};

showMobileMenu();
