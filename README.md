# TapOnIt Assignment

Web Application of TapOnIt Assignment

## Prerequisite

To build and run the project following cli is necessary

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Vue](https://vuejs.org/guide/introduction.html)
- [Nuxt](https://v2.nuxt.com/docs/get-started/installation)
- [postgres](https://www.postgresql.org/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
PORT=<Port>
NODE_ENV=<node environment>
HOST=<host>
DB_PORT=<database port>
USERNAME=<database username>
PASSWORD=<database password>
CREDENTIAL_PASSWORD=<credential password>
DATABASE=<database name>
LOGGING=<logging flag>
SECRET_KEY=<your sceret key>
```

## Build Production Web App

Clone the project & go to the project directory
then install dependencies using

```bash
  yarn install
```

```bash
"build": "rm -rf dist && tsc -p ."
```

## Run Locally

```bash
"start": "nodemon ./src/app.ts"
"start:tsc": "tsc && yarn start"
```

## Running Typescript Check

```bash
"tsc": "tsc"
```

## dependencies

```
"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"jsonwebtoken": "^9.0.0",
"pg": "^8.11.0",
"reflect-metadata": "^0.1.13",
"typeorm": "^0.3.17"
```

## devDependencies

```
"@types/cors": "^2.8.13",
"@types/express": "^4.17.17",
"@types/jsonwebtoken": "^9.0.2",
"@types/node": "^20.3.1",
"nodemon": "^2.0.22",
"ts-node": "^10.9.1",
"typescript": "^5.1.3"
```

## Folder Structure

- /src

  - config &gt; `Contains all the configuration`
    - db config
  - entities &gt; `Contains all the entity of typeorm`

    - entity

  - mappers &gt; `Contains all the mapping along with entity property and request response property`

    - mapper

  - middlewares &gt; `Contains all the middleware`

    - middleware

  - models &gt; `Contains all the types for request and response`

    - model

  - queries &gt; `Contains all the database queries`
    - query
  - routes &gt; `Contains all the routes in express`

    - route

  - services &gt; `Contains all the services regarding the api calls`

    - service

  - utils &gt; `Contains all the utils function that are used in the app`

    - util

  - app &gt; _Main File_ `This file bootstraps first`

  - env &gt; > `Contains all the secure variables on it`
