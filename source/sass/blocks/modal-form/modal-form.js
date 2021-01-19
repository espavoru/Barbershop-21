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

    this.elem = document.createElement(options.container);
    const elem = this.elem;
    elem.classList.add(blockClass);
    if (options.cls) elem.classList.add(options.cls);

    if (options.closeIcon) {
      const closeBtn = document.createElement("i");
      closeBtn.classList.add(`${blockClass}__icon-close`);
      elem.appendChild(closeBtn);
    }

    if (options.title) {
      const title = document.createElement("h2");
      title.classList.add(`${blockClass}__title`);
      title.textContent = options.title;

      elem.append(title);
    }

    if (options.description) {
      const description = document.createElement("p");
      description.classList.add(`${blockClass}__description`);
      description.innerHTML = options.description;

      elem.append(description);
    }

    if (options.login) {
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

    if (options.password) {
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

    if (options.stayIn) {
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
    }

    if (options.passRecover) {
      const rememberPassword = document.createElement("a");
      rememberPassword.classList.add(`${blockClass}__remember-password`);
      rememberPassword.href = options.rememberPasswordHref || "#";
      rememberPassword.textContent = "Я забыл пароль!";
      elem.append(rememberPassword);
    }

    if (options.buttons) {
      const btnsWrapper = document.createElement("div");
      btnsWrapper.classList.add(`${blockClass}__btns-wrapper`);

      if (options.buttonLogin) {
        const btnLogIn = document.createElement("button");
        btnLogIn.classList.add(`${blockClass}__btn-login`);
        btnLogIn.classList.add(`button`);

        btnsWrapper.append(btnLogIn);
      }

      if (options.buttonClose) {
        const btnClose = document.createElement("button");
        btnClose.classList.add(`${blockClass}__btn-close`);
        btnClose.classList.add(`button`);
        btnClose.type = "button";

        btnsWrapper.append(btnClose);
      }

      elem.append(btnsWrapper);
    }
  }
}

const createModalFormOverlay = () => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("modal-form-overlay");
  return overlayElement;
};

const removeModalFormOverlay = () => {
  const overlay = document.querySelector(".modal-form-overlay");
  if (overlay) overlay.remove();
};
