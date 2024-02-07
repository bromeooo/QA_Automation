# 'setup' target for installing Python dependencies
setup:
	@echo "Installing Python dependencies..."
	poetry install

# Command to run Playwright tests
playwright_test:
	poetry run behave --tags=@playwright

# Command to run Selenium tests
selenium_test:
	poetry run behave --tags=@selenium

# Command to debug Playwright tests
debug_playwright_test:
    poetry run python -m debugpy --wait-for-client --listen 5678 -m behave --tags=@playwright

