const serachEl = document.querySelector(".search");
const serachInputEl = serachEl.querySelector("input");

serachEl.addEventListener("click", function () {
  serachInputEl.focus();
});

serachInputEl.addEventListener("focus", function () {
  serachEl.classList.add("focused");
  serachInputEl.setAttribute("placeholder", "Search...");
});

serachInputEl.addEventListener("blur", function () {
  serachEl.classList.remove("focused");
  serachInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
