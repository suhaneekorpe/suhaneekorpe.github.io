const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀";
} else {
  themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {
  const darkMode = root.getAttribute("data-theme") === "dark";

  if (darkMode) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☾";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀";
  }
});
