(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem("homepage-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    toggle.querySelector(".theme-label").textContent = dark ? "Light mode" : "Dark mode";
    themeColor.setAttribute("content", dark ? "#101725" : "#f4f7fc");
  }

  applyTheme(initialTheme);
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("homepage-theme", nextTheme);
  });
})();
