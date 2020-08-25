import createElement from "./createElement.js";
import fetchPictures from "./data.js";

const searchInput = document.querySelector("#search");
const form = document.querySelector(".search-form");
const gallery = document.getElementById("gallery");
const heading = document.getElementById("heading");

let searchValue;

const renderPictures = (data) => {
  data.photos.forEach((photo) => {
    // console.log(photo);
    const galleryDiv = createElement(
      "div",
      [
        createElement("img", [], { src: photo.src.large }),

        createElement(
          "div",
          [
            createElement("p", "Photo by " + photo.photographer),
            createElement("a", "Download", {
              href: photo.src.original,
              target: "_blank",
            }),
          ],

          { className: "img-properties" }
        ),
        ,
      ],
      { className: "gallery-img" }
    );

    gallery.appendChild(galleryDiv);
  });
};

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
});

const clear = () => {
  gallery.innerHTML = "";
  searchInput.value = "";
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clear();
  const queryText = searchValue;
  const data = await fetchPictures("search", queryText, 5);
  heading.textContent = `Your results for '${queryText}'`;
  renderPictures(data);
});

// TOGGLING LIGHT AND DARK MODE
let darkMode = localStorage.getItem("darkMode");
const modeToggler = document.getElementById("toggle--knob");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  if (modeToggler.checked === false) {
    modeToggler.checked = true;
  }

  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  if (modeToggler.checked === true) {
    modeToggler.checked = false;
  }
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

modeToggler.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    console.log("checking");
    enableDarkMode();
  } else {
    console.log("unchecking");
    disableDarkMode();
  }
});
