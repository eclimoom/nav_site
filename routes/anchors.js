var express = require('express');
var router = express.Router();
var http =  require('http');
var url = require('url');


var sites = {
  //6间房
  room6:"http://v.6.cn/getVisitorMoreList.php?&p=1&size=18",
  wohai:"http://wohai.com/api/anchor?page=0&size=18",
  laifeng: "http://www.laifeng.com/center/1/1003",
  huya: "http://www.huya.com/cache.php?m=GameSubject&do=allGameLive&gid=1&page=1",
  bobo:"http://www.bobo.com/anchor?type=gold&responseType=do",
  fanxing:"http://visitor.fanxing.kugou.com/VServices/IndexService.IndexService.getLiveList/1-4-1/",
  huajiao:"http://www.huajiao.com/category/2",
  kk:"http://www.kktv5.com/CDN/output/M/3/I/20010302/P/cataId-46_start-0_offset-25_platform-1_a-2_c-100101/json.js"
}



router.get('/room6', function(req, res) {
  http.get(sites.room6, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/wohai', function(req, res) {
  http.get(sites.wohai, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/laifeng', function(req, res) {
  http.get(sites.laifeng, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/huya', function(req, res) {
  http.get(sites.huya, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/bobo', function(req, res) {
  http.get(sites.bobo, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/huajiao', function(req, res) {
  http.get(sites.huajiao, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

router.get('/kk', function(req, res) {
  http.get(sites.kk, function (response) {
    var source = "";
    response.on('data', function(data) {
      source += data;
    });
    response.on('end', function() {
      res.end( source );
    });
  }).on('error', function () {
    console.log("获取数据出现错误");
  });
});

module.exports = router;
