/* const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const servicesList = dropdown.querySelector(".servicesList");
  const options = dropdown.querySelector(".servicesList li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    servicesList.classList.toggle("servicesList-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      servicesList.classList.remove("servicesList-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      options.classList.add("active");
    });
  });
});
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("icon");
  if (document.body.classList.contains("icon")) {
    icon.src = "./Images/brightness.png";
  } else {
    icon.src = "./Images/Vector.png";
  }
}; */
/* 
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("icon");
  if (document.body.classList.contains("icon")) {
    icon.src = "./Images/brightness.png";
  } else {
    icon.src = "./Images/Vector.png";
  }
};  */

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
