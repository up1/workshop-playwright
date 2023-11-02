# Next.js + Playwright

This example shows how to configure Playwright to work with Next.js.

## Create project
```
$npx create-next-app --example with-playwright with-playwright-app
```


## Start web server
```
$npm run dev
```
Open url=http://localhost:3000/ in browser


## Run test with Playwright
```
$npm i --save-dev @types/node
$npm i
$npm run test:e2e
```