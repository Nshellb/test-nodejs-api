var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send({
    result: true,
    message:'hello by GET',
  });
});

router.post('/post', (req, res, next) => {
  res.send({
    result: true,
    message:'hello by POST',
  });
});

router.post('/postp', (req, res, next) => {
  const item = req.body;

  // params.param1를 'postp'로 전달 받았을때만 결과 반환
  if (item.params.param1 === 'postp') {
    res.send({
      result: true,
      message:'hello by POSTP',
    });
  } else {
    res.send({
      result: false,
      message:'postp fail',
    });
  }
});

module.exports = router;
