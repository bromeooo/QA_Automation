# QA Automation Repository

## Introduction
- This is a mono-repo that demos several different automation technologies for QA Automated testing
- Page Object Model is used for each sub repo
- To use for your own project, copy the test runner folder and the driver folder for the tech stack of your choice. 
- For web testing, the javascript and python folders are dual driver frameworks for both selenium and playwright
   - This architecture uses tagged hooks to switch between drivers
   - This can be useful if you are trying to switch to a newer technology (selenium --> playwright) without starting from scratch

## Languages
- Python
- JavaScript
- Java

## Technology
 - Cucumber
 - Maven 
 - Pytest
 - Mocha
 - Restassured 
 - Playwright
 - Selenium
 - Cypress
 - Appium
 - WebdriverIO
 - Github Actions
 - Page Object Model

## To perform demo tests
- cd into api, web or mobile testing repo
- cd into language of choice
- view readme in the directory on how to lauch a test for the specific technology stack

## Github Actions
- To see a sample of how to call a parallel test using both playwright and selenium, see the actons tab run. Trace files are generated for Playwright tests as artifacts and cucumber reports for both drivers
- Please message me if you would like to test on a [self hosted runner](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners) 
