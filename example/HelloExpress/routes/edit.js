var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
    response.render('edit',{title: 'Edit Page'});
})

module.exports = router;
