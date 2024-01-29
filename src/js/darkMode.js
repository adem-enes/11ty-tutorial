const darkMode = document.getElementById("dark-mode");
const body = document.querySelector("body");

darkMode?.addEventListener("change", (e) => {
    (e.target.checked) ? localStorage.setItem("ademenes-theme", "dark")
        : localStorage.setItem("ademenes-theme", "light");

    (e.target.checked) ? document.documentElement.setAttribute('data-theme', 'dark')
        : document.documentElement.setAttribute('data-theme', 'light');
});

(() => {
    const theme = localStorage.getItem("ademenes-theme");
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === "dark") {
        darkMode.checked = true;
    }
})();