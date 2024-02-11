playwright_test:
	behave --tags=@playwright --format html --out test_artifacts/report/playwright_report.html

# Command to run Selenium tests
selenium_test:
	behave --tags=@selenium --format html --out test_artifacts/report/selenium_report.html

parallel_test:
	behavex --parallel-processes 2
