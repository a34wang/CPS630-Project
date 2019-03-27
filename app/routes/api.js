var User = require('../models/user');

module.exports= function(router){

    router.post('/users', function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        if(req.body.username ==null|| req.body.username == ''||req.body.password == null || req. body.password == ''){
             res.send('Please enter your username and password')
    
        }
        else {
        user.save( function(err){if(err){res.send("user name already exist");}
        else {res.send("user registered");}});
        }
       
    });

    return router;
}