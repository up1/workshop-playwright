# Workshop with Playwright


## Run test
```
$npx playwright test
$npx playwright show-report
```

## Run test in UI Mode and watch all testcases
```
$npx playwright test --ui
```

## Visual testing
```
$npx playwright test
$npx playwright test --update-snapshots
```

## Run by tag
```
$npx playwright test --grep @xyz
$npx playwright test --grep-invert @xyz
```

## Working with environment  variables
```
// Mac and Linux
$export DATA_PATH=<path to data file>

// Windows
$set DATA_PATH=<path to data file>

$npx playwright test --grep @upload
```