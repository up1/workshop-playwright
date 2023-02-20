# Workshop :: UI testing with Playwright


## Start Web server

```
$docker compose build
$docker compose up -d web
$docker compose ps
NAME                IMAGE               COMMAND              SERVICE             CREATED             STATUS              PORTS
demo-web-1          demo-web            "python server.py"   web                 3 seconds ago       Up 2 seconds        0.0.0.0:8080->8080/tcp
```

Open url = `http://localhost:8080/` in web browser
* email = user@example
* password = password

## Start testing with playwright

Create project with playwright with TypeScript
```
$cd test
$npm init playwright@latest
```

Run test
```
$npx playwright test
```

Open HTML report
```
$npx playwright show-report
```

Run test with [Docker compose](https://playwright.dev/docs/docker)
```
$cd ..
$docker compose build test
$docker compose up test --remove-orphans
```

## Playwright Configuration

File `playwright.config.ts`
```
export default defineConfig({
  globalSetup: require.resolve('./tests/global-setup'),
  testDir: './tests/specs',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
    storageState: 'tests/storage-state.json',
    screenshot: 'on',
    video: 'on',
    headless: true,
  },
```
