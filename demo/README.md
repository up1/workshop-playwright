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
