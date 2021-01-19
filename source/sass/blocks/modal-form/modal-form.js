(function () {
  class createModal {
    constructor(options) {
      this.elem = "";
      this.options = options;
    }

    getElem() {
      if (!this.elem) this.render();

      return this.elem;
    }

    removeElem() {
      const elemInDOM = document.querySelectorAll(`.${this.options.cls}`);
      if (elemInDOM) {
        elemInDOM.forEach((elem) => {
          elem.remove();
        });
      }
    }

    render() {
      const options = this.options;
      const blockClass = "modal-form";

      this.elem = document.createElement("form");
      const elem = this.elem;
      elem.classList.add(blockClass);
      if (options.cls) elem.classList.add(options.cls);

      const closeBtn = document.createElement("i");
      closeBtn.classList.add(`${blockClass}__icon-close`);
      elem.appendChild(closeBtn);

      if (options.title) {
        const title = document.createElement("h2");
        title.classList.add(`${blockClass}__title`);
        title.textContent = options.title;

        elem.append(title);
      }

      if (options.description) {
        const description = document.createElement("p");
        description.classList.add(`${blockClass}__description`);
        description.textContent = options.description;

        elem.append(description);
      }

      if (options.login !== false) {
        const labelLogin = document.createElement("label");
        labelLogin.htmlFor = "login";

        const inputLogin = document.createElement("input");
        inputLogin.classList.add(`${blockClass}__field`);
        inputLogin.classList.add(`${blockClass}__field--login`);
        inputLogin.id = "login";
        inputLogin.name = "login";
        inputLogin.placeholder = "Логин";
        inputLogin.required = "required";

        elem.append(inputLogin, labelLogin);
      }

      if (options.password !== false) {
        const inputPassword = document.createElement("input");
        inputPassword.classList.add(`${blockClass}__field`);
        inputPassword.classList.add(`${blockClass}__field--password`);
        inputPassword.type = "password";
        inputPassword.id = "password";
        inputPassword.name = "password";
        inputPassword.placeholder = "Пароль";

        const labelPassword = document.createElement("label");
        labelPassword.htmlFor = "password";

        elem.append(inputPassword, labelPassword);
      }

      const labelStayIn = document.createElement("label");
      labelStayIn.htmlFor = "stayIn";
      labelStayIn.classList.add(`${blockClass}__stay-in`);
      labelStayIn.classList.add("field-checkbox");
      labelStayIn.textContent = "Запомните меня";

      const inputStayIn = document.createElement("input");
      inputStayIn.classList.add("field-checkbox__input");
      inputStayIn.id = "stayIn";
      inputStayIn.type = "checkbox";
      inputStayIn.name = "stayIn";

      elem.append(inputStayIn);
      elem.append(labelStayIn);

      const rememberPassword = document.createElement("a");
      rememberPassword.classList.add(`${blockClass}__remember-password`);
      rememberPassword.href = options.rememberPasswordHref || "#";
      rememberPassword.textContent = "Я забыл пароль!";
      elem.append(rememberPassword);

      const btnsWrapper = document.createElement("div");
      btnsWrapper.classList.add(`${blockClass}__btns-wrapper`);

      const btnLogIn = document.createElement("button");
      btnLogIn.classList.add(`${blockClass}__btn-login`);
      btnLogIn.classList.add(`button`);

      const btnClose = document.createElement("button");
      btnClose.classList.add(`${blockClass}__btn-close`);
      btnClose.classList.add(`button`);
      btnClose.type = "button";
      btnClose.textContent = "Закрыть";

      btnsWrapper.append(btnLogIn, btnClose);
      elem.append(btnsWrapper);
    }
  }

  const hideMobileMenu = () => {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.toggle("main-nav--opened");
  };

  const createModalFormOverlay = () => {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("modal-form-overlay");
    return overlayElement;
  };

  const removeModalFormOverlay = () => {
    const overlay = document.querySelector(".modal-form-overlay");
    if (overlay) overlay.remove();
  };

  const clickHandler = (e) => {
    const loginFormOptions = {
      cls: "login-form",
      title: "Личный кабинет",
      description: "Введите свой логин и пароль, чтобы войти",
    };

    const loginForm = new createModal(loginFormOptions);
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
