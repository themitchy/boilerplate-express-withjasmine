var app = require('express').createServer();

app.get('/status', function(req,res){
    res.send({ status: 'online' });
});

app.listen(3000);

module.exports = app;