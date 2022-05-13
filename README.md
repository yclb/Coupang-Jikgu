# Release Note:

## [V_]
1. 
2. 

## 安裝
在本地安裝  [node](http://nodejs.org) 和 [npm](https://npmjs.com)

檢查目前 Node 版本號
```sh
$ node -v
```

初始化
```sh
$ npm init
```

npm 安裝 SASS 模組
```sh
$ npm install node-sass --save-dev
```
## npm 執行自訂 script 腳本片段
編譯 SASS： 從 tw/sass/main.scss 到 tw/css/style.css
```sh
npm run compile:sass
```

編譯 SASS： 從 tw/sass/main.scss 到 tw/css/style-min.css
```sh
npm run compile:sass-min
```
## SASS 檔案夾
- sass/main.scss `@import` SCSS Partials
- sass/section: 頁面上 `<section>` 區塊樣式