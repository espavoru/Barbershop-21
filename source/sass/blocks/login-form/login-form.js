(() => {
  const loginFormOptions = {
    container: "form",
    cls: "login-form",
    title: "Личный кабинет",
    description: "Введите свой логин и пароль, чтобы войти",
    closeIcon: true,
    login: true,
    password: true,
    stayIn: true,
    passRecover: true,
    buttons: true,
    buttonLogin: true,
    buttonClose: true,
  };
  const loginForm = new createModal(loginFormOptions);

  const hideMobileMenu = () => {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.toggle("main-nav--opened");
  };

  const clickHandler = (e) => {
    const formEl = document.querySelector(`.${loginFormOptions.cls}`);

    if (e.target.closest(".user-list__login")) {
      e.preventDefault();
      hideMobileMenu();

      if (!formEl) {
        document.body.prepend(loginForm.getElem());
        document.body.prepend(createModalFormOverlay());
      }
    }

    if (e.target.closest(".modal-form__btn-close")) {
      loginForm.removeElem();
      removeModalFormOverlay();
    }

    if (e.target.closest(".modal-form__icon-close")) {
      loginForm.removeElem();
      removeModalFormOverlay();
    }

    if (e.target.closest(".modal-form-overlay")) {
      loginForm.removeElem();
      removeModalFormOverlay();
    }

    if (e.target.closest(".modal-form__btn-login")) {
      alert("Form sent");
      e.preventDefault();
      loginForm.removeElem();
      removeModalFormOverlay();
    }
  };

  const keyupHandler = (e) => {
    const form = document.querySelector(".modal-form");
    if (form && e.keyCode == 27) {
      form.remove();
      removeModalFormOverlay();
    }
  };

  document.body.addEventListener("click", clickHandler);
  document.body.addEventListener("keyup", keyupHandler);
})();
