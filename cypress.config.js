const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração para relatórios
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-dev-shm-usage");
          return launchOptions;
        }
      });

      // Configuração para relatórios
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    chromeWebSecurity: false,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
