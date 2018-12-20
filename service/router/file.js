var express = require('express');
var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty');
var router = express.Router();

router.post('/upload', multipart(), function (req, res) {
  //获得文件名
  var filename = req.files.files.originalFilename || path.basename(req.files.files.path);

  //复制文件到指定路径
  var targetPath = '/Users/caiyuheng/node_pictures/' + filename;

  //复制文件流
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));

  //响应ajax请求，告诉它图片传到哪了
  res.json({ code: 200, data: { url: 'http://' + req.headers.host + '/Users/caiyuheng/node_pictures/' + filename } });
});

module.exports = router;