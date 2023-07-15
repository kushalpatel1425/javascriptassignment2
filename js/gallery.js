const images = [
  {
    src: "./images/flowers-pink-large.jpg",
    alt: "Pink Flowers",
    thumbnailSrc: "./images/flowers-pink-small.jpg",
    width: 1200,
    height: 800
  },
  {
    src: "./images/flowers-purple-large.jpg",
    alt: "Purple Flowers",
    thumbnailSrc: "./images/flowers-purple-small.jpg",
    width: 1200,
    height: 800
  },
  {
    src: "./images/flowers-red-large.jpg",
    alt: "Red Flowers",
    thumbnailSrc: "./images/flowers-red-small.jpg",
    width: 1200,
    height: 800
  },
  {
    src: "./images/flowers-white-large.jpg",
    alt: "White Flowers",
    thumbnailSrc: "./images/flowers-white-small.jpg",
    width: 1200,
    height: 800
  },
  {
    src: "./images/flowers-yellow-large.jpg",
    alt: "Yellow Flowers",
    thumbnailSrc: "./images/flowers-yellow-small.jpg",
    width: 1200,
    height: 800
  }
];

const thumbnailsContainer = document.querySelector(".thumbnails-container");
const featuredImage = document.querySelector("figure img");
const caption = document.querySelector("figure figcaption");

function createThumbnail(image) {
  const img = document.createElement("img");
  img.src = image.thumbnailSrc;
  img.alt = image.alt;
  img.width = 240;
  img.height = 160;
  img.classList.add("thumbnail");
  img.addEventListener("click", function () {
    featuredImage.src = image.src;
    featuredImage.alt = image.alt;
    caption.textContent = image.alt;
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(function (thumbnail) {
      thumbnail.classList.remove("active");
    });
    img.classList.add("active");
  });
  thumbnailsContainer.appendChild(img);
}

images.forEach(function (image) {
  createThumbnail(image);
});
