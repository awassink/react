###Install
```
npm install
```
####Steps that lead to current package.json - already executed in this project.
```
npm init
npm i -g typings typescript webpack
npm install --save react react-dom
npm install --save-dev ts-loader source-map-loader
typings install --global --save dt~react
typings install --global --save dt~react-dom
```

###Run
#####Dev
```
webpack -w
```
#####Prod
```
webpack -p
```
