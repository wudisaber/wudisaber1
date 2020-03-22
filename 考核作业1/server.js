const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const mysql = require("mysql");

const server = new express();

//后台允许前端跨域请求数据开始
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});
//后台允许前端跨域请求数据结束

// 使用bodyParser
server.use(bodyParser.urlencoded({
    extended: false
}))

server.listen(3000, () => {
    console.log("3000running")
});
(() => {
    server.use(cookieParser())
    let sessionArr = [];
    for (let i = 0; i < 10000; i++) {
        sessionArr[i] = "hello-everyone" + Math.random() * 100 + i
    }
    server.use(cookieSession({
        name: "jeijgiesjgo",
        keys: sessionArr,
        maxAge: 30 * 60 * 1000 //设置过期时间
    }))
})();

let fn = require("./route/index.js")
server.use("/api", fn())  //http://localhost:3000/api/product
