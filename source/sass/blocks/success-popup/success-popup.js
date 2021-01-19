(() => {
  const successPopupOptions = {
    container: "div",
    cls: "success-popup",
    title: "Это успех!",
    description:
      "Ваша заявка отправлена.<br>Ожидайте, мы свяжемся с вами как только <br>будет минутка.",
    closeIcon: false,
    login: false,
    password: false,
    stayIn: false,
    passRecover: false,
    buttons: true,
    buttonLogin: false,
    buttonClose: true,
  };
  const successPopup = new createModal(successPopupOptions);

  const clickHandler = (e) => {
    const popupEl = document.querySelector(`.${successPopupOptions.cls}`);

    if (e.target.closest(".order__submit")) {
      e.preventDefault();

      if (!popupEl) {
        setTimeout(() => {
          document.body.prepend(successPopup.getElem());
        }, 1000);
      }
    }

    if (e.target.closest(".success-popup .modal-form__btn-close")) {
      successPopup.removeElem();
    }
  };

  document.addEventListener("click", clickHandler);
})();
