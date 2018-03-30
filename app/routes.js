var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/submit/review-expense', function (req, res) {
  res.render('submit/review-expense', {'expense_title' : 'Food from Manchester Trip'});
});

module.exports = router
