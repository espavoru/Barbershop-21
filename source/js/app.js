const loadScript = (url) => {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  head.append(script);
};

loadScript("sass/blocks/main-nav/main-nav.js");
loadScript("sass/blocks/slider/slider.js");
loadScript("sass/blocks/news/news.js");
loadScript("sass/blocks/project/project.js");
