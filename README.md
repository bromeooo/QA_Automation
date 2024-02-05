# QA Automation Repository

## Introduction
- This is a mono-repo that demos several different automation technologies for QA Automated testing
- Page Object Model is used for each sub repo
- To use for your own project, copy the test runner folder and the driver folder for the tech stack of your choice. 

## Technology used
 - Cucumber
 - Pytest
 - Mocha
 - Playwright
 - Selenium
 - Cypress
 - Appium
 - WebdriverIO
 - Page Object Model

### To perform demo tests
- cd into api, web or mobile testing repo
- cd into language of choice
- if python create a venv
- ``` make setup ```
- view readme in directory on how to lauch a test for the specific technology stack
```
QA_Automation
├─ README.md
├─ api
├─ mobile
└─ web
   ├─ javascript
   │  ├─ .nvmrc
   │  ├─ driver_playwright
   │  ├─ driver_selenium
   │  ├─ package-lock.json
   │  ├─ package.json
   │  └─ test_cucumber
   │     ├─ config
   │     │  ├─ after.js
   │     │  ├─ before.js
   │     │  └─ config.js
   │     ├─ feature
   │     │  └─ test.feature
   │     └─ feature_steps
   │        └─ test_steps.js
   ├─ python
   │  ├─ Makefile
   │  ├─ README.md
   │  ├─ driver_playwright
   │  ├─ driver_selenium
   │  ├─ test_cucumber
   │  │  ├─ config
   │  │  ├─ feature
   │  │  └─ feature_steps
   │  └─ test_pytest
   └─ test_data

```