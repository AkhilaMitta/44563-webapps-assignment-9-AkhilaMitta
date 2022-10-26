var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var no1 = Math.floor(Math.random()*10);
  var no2 = Math.random()*10;
  var no3 = Math.random()*1;
  var no4 = Math.floor(Math.random()*1);
  var cos = Math.cos(no1);
  var cos = Math.cos(no2);
  var asin = Math.asin(no3);
  var asin = Math.asin(no4);
  var asinh = Math.asinh(no1);
  var asinh = Math.asinh(no2);
  

  res.render("computation", {  title:'Bonus', 
  title1:'Random Absolute Input Value', no1: no1,
  title2:'Random Float Input Value', no2: no2,
  title3:'Random Float Input Value Between 0-1', no3: no3, 
  title4:'Random Absolute Input Value Between 0-1', no4:no4, 
  cos: cos, asin: asin, asinh: asinh});
});

module.exports = router;