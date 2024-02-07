# QA Automation Repository

## Introduction
- This is a mono-repo that demos several different automation technologies for QA Automated testing
- Page Object Model is used for each sub repo
- To use for your own project, copy the test runner folder and the driver folder for the tech stack of your choice. 

## Languages
- Python
- JavaScript
- Java

## Technology
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
├─ .vscode
│  └─ launch.json
├─ README.md
├─ api
├─ helpers
│  ├─ javascript
│  └─ python
├─ mobile
├─ testData
│  └─ constants.json
└─ web
   ├─ javascript
   │  ├─ .nvmrc
   │  ├─ README.md
   │  ├─ driverPlaywright
   │  │  ├─ basePage.js
   │  │  ├─ domChallenge.js
   │  │  └─ home.js
   │  ├─ driverSelenium
   │  │  ├─ basePage.js
   │  │  ├─ domChallenge.js
   │  │  └─ home.js
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ testArtifacts
   │  │  ├─ .DS_Store
   │  │  ├─ cucumber_report.html
   │  │  └─ trace
   │  │     └─ Playwright_UI_Test
   │  └─ testCucumber
   │     ├─ config
   │     │  ├─ after.js
   │     │  ├─ before.js
   │     │  └─ config.js
   │     ├─ feature
   │     │  └─ test.feature
   │     └─ featureSteps
   │        ├─ testSteps_playwright.js
   │        └─ testSteps_selenium.js
   └─ python
      ├─ Makefile
      ├─ README.md
      ├─ cucumber
      │  ├─ Makefile
      │  ├─ driver_playwright
      │  │  ├─ __init__.py
      │  │  ├─ __pycache__
      │  │  │  ├─ __init__.cpython-39.pyc
      │  │  │  ├─ basePage.cpython-39.pyc
      │  │  │  └─ home.cpython-39.pyc
      │  │  ├─ base_page.py
      │  │  ├─ dom_challenge.py
      │  │  └─ home.py
      │  ├─ environment.py
      │  ├─ steps
      │  │  ├─ __init__.py
      │  │  ├─ playwright_steps.py
      │  │  └─ test_steps_selenium.py
      │  ├─ test.feature
      │  └─ test_artifacts
      │     └─ trace
      ├─ driverSelenium
      ├─ requirements.txt
      └─ testPytest

```
