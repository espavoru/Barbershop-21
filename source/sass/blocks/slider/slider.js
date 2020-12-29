const slider = (selector) => {
  const slider = document.querySelector(`${selector}`);
  const slides = slider.querySelectorAll(".slider__item");
  const toggles = slider.querySelectorAll(".slider__toggle");

  const clickHandler = (e) => {
    if (e.target.closest(".slider__toggle")) {
      toggles.forEach((toggle) => {
        toggle.classList.remove("slider__toggle--active");
      });

      e.target.classList.add("slider__toggle--active");

      slides.forEach((slide) => {
        if (slide.classList.contains("slider__item--active")) {
          slide.classList.remove("slider__item--active");

          toggles.forEach((toggle, i) => {
            if (toggle.classList.contains("slider__toggle--active")) {
              slides[i].classList.add("slider__item--active");
            }
          });
        }
      });
    }
  };

  slider.addEventListener("click", clickHandler);
};

slider(".advantages");
