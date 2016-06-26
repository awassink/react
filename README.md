npm init
npm i -g typings typescript webpack
npm install --save react react-dom
npm install --save-dev ts-loader source-map-loader
typings install --global --save dt~react
typings install --global --save dt~react-dom

Dev
webpack -w

Prod
webpack -p
