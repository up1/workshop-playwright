FROM mcr.microsoft.com/playwright:v1.30.0-focal
WORKDIR /test
COPY . .
RUN npm install
CMD [ "npx", "playwright", "test" ]
