FROM mcr.microsoft.com/playwright:v1.39.0-jammy
WORKDIR /test
COPY . .
RUN npm install
RUN npx playwright install
CMD [ "npx", "playwright", "test" ]
