# Vue-Hydro
[![version](https://img.shields.io/badge/version-beta-yellow.svg)](https://img.shields.io/badge/version-beta-yellow.svg)

Dashboard for monitor hydroponic system (test) 

## Description

vue.js + vue-mqtt + api server + cloud mongodb

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install [vue/cli](https://cli.vuejs.org/guide/) , [pm2](https://pm2.keymetrics.io/)

```bash
sudo npm i -g @vue-cli
npm install pm2 -g
```
first install module & run api server
```bash
npm install
pm2 start server/index.js
```
and install module & run vue
```bash
cd vue-hydro
npm install
npm run serve
```
Enjor ! 

## Create by
@tanitsr
