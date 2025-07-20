// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  //testDir: './task5',
  testDir: './tests',
  //testDir: './practiceCodes',
  //outputDir:'./test-results',
  /* Run tests in files in parallel */
  //fullyParallel: true,
  timeout: 30 * 1000,
  workers:1,
  //testMatch:'test.list.spec.js',
  expect:{

    timeout:5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  use: {
    browserName : 'chromium',
    headless : false,
    screenshot:'on',
    trace:'on',  //off,on
    //...devices['iPhone 11'],
    colorScheme: "dark",
    //locale:'de-DE',
    }
  

  
});

