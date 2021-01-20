window.onload = () => {
  /**
   * Creating short single news
   * @param {object} options
   * @returns {object}
   */

  class createNews {
    constructor(options) {
      let elem;

      const getElem = () => {
        if (!elem) render();

        return elem;
      };

      const render = () => {
        elem = document.createElement("li");
        elem.classList.add("news__item");

        const newsDate = document.createElement("time");
        newsDate.classList.add("news__date");
        newsDate.setAttribute("datetime", options.datetime || "2021-01-30");

        const newsDay = document.createElement("b");
        newsDay.classList.add("news__day");
        newsDay.textContent = options.day || "20";

        newsDate.textContent = options.month || "Jan";
        newsDate.prepend(newsDay);

        const newsText = document.createElement("p");
        newsText.classList.add("news__text");
        newsText.textContent =
          options.text ||
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ipsum!";

        elem.append(newsDate);
        elem.append(newsText);
      };

      this.getElem = getElem;
    }
  }

  if (document.querySelector(".news__list")) {
    let viewport = document.body.clientWidth;

    const news01 = new createNews({
      day: 13,
      month: "Янв",
      text:
        "Все дорожает, а наши стрижки нет! Как так? Приходите, постригитесь.",
    });

    if (viewport >= 1080) {
      document.querySelector(".news__list").append(news01.getElem());
    }

    window.addEventListener("resize", () => {
      viewport = document.body.clientWidth;

      if (viewport < 1080) {
        const newsItems = document.querySelectorAll(".news__item");

        for (let i = 0; i < newsItems.length - 2; i++) {
          newsItems[2].remove();
        }
      } else {
        document.querySelector(".news__list").append(news01.getElem());
      }
    });
  }
};
