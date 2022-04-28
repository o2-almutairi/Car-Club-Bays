var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/club-list', function(req, res, next) {
    var sql='SELECT * FROM car_club_bays';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('club-list', { title: 'club List', clubData: data});
  });
});
module.exports = router;
router.get('/club-operator', function(req, res, next) {
    var sql='SELECT * FROM car_club_bays ORDER BY ccid';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('club-operator', { title: 'club By Operator', clubData: data});
  });
});
module.exports = router;