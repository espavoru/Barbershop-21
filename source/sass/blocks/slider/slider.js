if (document.querySelector(".slider")) {
  const slider = (selector) => {
    const slider = document.querySelector(`${selector}`);
    const slides = slider.querySelectorAll(".slider__item");
    const togglesList = slider.querySelector(".slider__toggles");

    slides.forEach((slide, i) => {
      const toggle = document.createElement("button");
      toggle.classList.add("slider__toggle");
      toggle.textContent = i + 1;
      togglesList.append(toggle);
    });

    slider
      .querySelector(".slider__toggle")
      .classList.add("slider__toggle--active");

    const clickHandler = (e) => {
      if (e.target.closest(".slider__toggle")) {
        const toggles = slider.querySelectorAll(".slider__toggle");

        toggles.forEach((toggle) => {
          toggle.classList.remove("slider__toggle--active");
        });

        e.target.classList.add("slider__toggle--active");

        slides.forEach((slide) => {
          slide.classList.remove("slider__item--active");
        });

        toggles.forEach((toggle, i) => {
          if (toggle.classList.contains("slider__toggle--active")) {
            slides[i].classList.add("slider__item--active");
          }
        });
      }
    };

    slider.addEventListener("click", clickHandler);
  };

  slider(".advantages");
  slider(".reviews");
}
