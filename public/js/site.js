window.siteApp = function siteApp() {
  return {
    theme: "light",
    navOpen: false,

    init() {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        this.theme = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.theme = "dark";
      }
      this.applyTheme();
    },

    toggle() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      this.applyTheme();
    },

    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.theme);
    },
  };
};
