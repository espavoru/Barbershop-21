const projectGallery = (options) => {
  const imgContainers = document.querySelectorAll(".project__picture");
  let viewport = document.body.clientWidth;

  const createImg = () => {
    imgContainers.forEach((elem, i) => {
      if (options.src[i]) {
        const newImg = document.createElement("img");
        newImg.classList.add("project__image");
        newImg.classList.add("project__image--lg");
        newImg.src = options.src[i];

        elem.append(newImg);
      }
    });
  };

  const deleteImg = () => {
    const imgs = document.querySelectorAll(".project__image--lg");
    if (imgs) {
      imgs.forEach((img) => {
        img.parentNode.removeChild(img);
      });
    }
  };

  const toggleImgs = () => {
    window.addEventListener("resize", () => {
      const imgs = document.querySelectorAll(".project__image--lg");
      viewport = document.body.clientWidth;

      if (viewport >= 1080) {
        if (!imgs) createImg();
      } else {
        deleteImg();
      }
    });
  };

  if (viewport >= 1080) createImg();
  toggleImgs();
};

const options = {
  src: ["img/photo-1-desktop.jpg"],
};

projectGallery(options);
