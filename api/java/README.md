# Restassured and Cucumber Example

Example of tests of an API using REST-assured and Cucumber. The API used for testing is [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Getting started

- [Java](https://www.java.com/en/)<br>
- [Maven](https://maven.apache.org/)<br>

## Configuration

### `git clone https://github.com/marciovrl/restassured-cucumber.git`

Clone the project

## Commands

### `mvn clean`

Clean the maven repo

### `mvn install`

Install the maven requirements

### `mvn test`

Execute the test scenarios

### `make help`

Displays all options for the project's make commands

```
testiing
├─ .git
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-1c58b3e71232590879883fcaed5202c9d3ebe4f6.idx
│  │     └─ pack-1c58b3e71232590879883fcaed5202c9d3ebe4f6.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ Makefile
├─ README.md
├─ pom.xml
└─ src
   └─ test
      ├─ features
      │  └─ Post.feature
      └─ java
         ├─ steps
         │  └─ Post.java
         └─ support
            └─ CucumberRunner.java

```