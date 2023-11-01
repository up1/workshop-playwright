# Workshop with Playwright
* Web browser testing
* Visual testing
* Working with External API
  * Mock API => XHR/Fetch 
* Working with API
* Page Object Model

## Start with playwright

Create project
```
$npm init playwright@latest
```

Run test
```
$npx playwright test
```

Run test with browser
```
$npx playwright test --project=chromium
```

Run test with debug
```
$npx playwright test --debug
```

Run test with trace
```
$npx playwright test --trace on
```

Run test in UI Mode
```
$npx playwright test --ui
```

Auto generate code
```
$npx playwright codegen
```

Show report
```
$npx playwright show-report
```
