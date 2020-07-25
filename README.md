# Random quote generator / QuoteGargen API

A demo project for a web-dev course (2020): a random quote generator using a QuoteGarden API.

![Alt Text](./src/assets/giffy.gif)

### Installing

Clone repo

```
git clone git@github.com:mazdok/random-quotes.git
```

Install dependencies

```
npm i
```

Start project locally
```
npm run serve
```

## Deployment

Set your custom domain in a '.deploy.sh' file

```
surge dist --domain <your-domain-name>.surge.sh
```

Run command to build and deploy project to a static hosting

```
npm run deploy
```

## Built With

* [vue.js](https://vuejs.org/) - The frontend framework used
* [tailwind](https://tailwindcss.com/docs) - A utility first CSS framework
* [QuoteGarden](https://pprathameshmore.github.io/) - A RESTful API for quotes
