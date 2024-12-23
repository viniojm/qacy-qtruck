const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const mongo = require('cypress-mongodb')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      mongo.configurePlugin(on)
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      "browserPermissions": {
        "notifications": 'allow',
        "geolocation": 'allow'
      },
      mongodb: {
        'uri': 'mongodb+srv://qa:cademy@cluster0.4rwit.mongodb.net/QtruckDB?retryWrites=true&w=majority&appName=Cluster0',
        'database': 'QtruckDB'
    }
    }
  },
});
