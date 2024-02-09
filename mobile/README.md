# Appium WDIO Framework

## Setup

* The setup and device management for mobile testing is the most complex piece
* This setup is for MacOS. If you have a windows device, you will only be able to test android devices (no Xcode). 
* Simulators will be used for this demo, but any real device configuration or 3rd party (browserstack, saucelabs, lambdatest, etc.) can be added for WDIO/Appium
    * Sample App files are from [WDIO](https://github.com/webdriverio/native-demo-app/releases)

## General Requirements

1. Node JS `$ nvm use` to use node20
2. Open JDK `brew install --cask adoptopenjdk`
    * `/usr/libexec/java_home` to check where SDK was installed
    * `/usr/libexec/java_home -V` to check java version
3. Add JAVA_HOME
    * `nano ~/.zshrc`
    * paste `    export JAVA_HOME=$(/usr/libexec/java_home)`
    * save 
    * `    source ~/.zshenv`
    * `echo $JAVA_HOME` should return something like `/Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home`
4. Install Appium Globally
    ``` 
    npm install -g appium@next 
    ```
    * check with `appium -v`
5. Install XCUITest and UIAutomator2 (apple and android drivers)
    ```
    appium driver install xcuitest
    appium driver install uiautomator2
    ```
    * check with `appium driver list`
6. Install [Appium inspector UI](https://github.com/appium/appium-inspector/releases) 
    * MacOS users might have to enable security to open Appium inspector
7. `npm install appium-doctor -g`
8. WebdriverIO Install
    ```
    npm init wdio .
    ````

## Android Setup
1. Download [Android Studio](https://developer.android.com/studio) 
2. Add ANDROID_HOME
    * `nano ~/.zshrc`
    *   add the below to .zshrc
        ```
        export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
        export PATH=$ANDROID_HOME/platform-tools:$PATH
        export PATH=$ANDROID_HOME/tools:$PATH
        ```
    * `    source ~/.zshenv`
    *  `   echo $ANDROID_HOME` should return something like 
    `/Users/[USER]/Library/Android/sdk`
    * make sure `adb` works ([Android Debug Bridge](https://developer.android.com/tools/adb))
