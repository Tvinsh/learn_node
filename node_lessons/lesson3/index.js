// lesson3   学习 superagent 与 cheerio

const express = require('express');

const superagent = require('superagent');

const cheerio = require('cheerio');

const app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了

      var $ = cheerio.load(sres.text);
      var items = [];
      $('.cell').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.find('.topic_title').attr('title'),
          href: $element.find('.topic_title').attr('href'),
          name: $element.find('.user_avatar img').attr('title')
        });
      });

      res.send(items);
    });
});


app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
})