/**
 * Created by Williamhiler on 2016/11/22.
 */
var cheerio = require('cheerio');
var superagent = require('superagent');
var charset = require("superagent-charset");
charset(superagent); //设置字符

// 球探获取联赛数据
//http://zq.win007.com/jsData/matchResult/2017-2018/s36.js?version=2018072404


// var url = "http://vip.win007.com/changeDetail/handicap.aspx?id=1509904&companyID=8&l=0";
// var url = "http://zq.win007.com/big/League/2017-2018/36.html";
var url = "http://zq.win007.com/jsData/matchResult/2017-2018/s36.js?version=2018072404";
superagent.get(url)
    .charset('utf-8')
    .buffer(true)
    .end(function (err, sres) {
        if (err) {
            console.log(err);
            return false;
        }
        var $ = cheerio.load(sres.text, {decodeEntities: false});

        console.log(sres)

    });



