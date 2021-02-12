# Pokemon Nest app
## Description

This is a nest application intended to be run on a [repl.it](https://www.repl.it).

The application has (atm) a single endpoint (`/pokemon/{id}`) and it returns the response from the [PokeAPI](https://pokeapi.co). It caches the responses using a TTL of 60 seconds. This repl.it is for hackers, not for jerks.

## To-do
- [ ] Improve documentation
- [ ] Apply clean architecture so that it can be used as a template

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```