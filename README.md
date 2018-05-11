# template-react-webpack-babel
A starting template for reactjs apps using webpack and babel

## Installation
run `npm install`

## Development
The server.js file is the starting point for the server. it uses port 8082, and it also uses /test1 as the main url subpath.
For your projects, you will want to change port 8082 to any port you want, and you will want to get rid of the /test1. Subsequently,
you will want to remove the /test1 from index.html.


This template project uses nodemon to watch for server changes, and it uses webpack in watch mode to watch for client changes.
Open up 2 terminal windows. 1 for running webpack in watch mode, and the other for running nodemon.

Nodemon:
```
./node_modules/nodemon/bin/nodemon.js server.js
```

Webpack:
```
npm run build
```

## Dependencies

Dev Dependencies:
* nodemon
* react
* react-dom
* webpack
* webpack-cli
* babel-core
* babel-loader
* babel-preset-env
* babel-preset-react

Production Dependencies:
* express
* helmet
