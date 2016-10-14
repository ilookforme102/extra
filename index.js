/**
 * Created by ilook on 10/14/2016.
 */
// bring in necessary dependency
var express = require('express');
var bodyParser = require('body-parser');
//configure the express web server framework
var app = express();
app.use(bodyParser.json);
//var posts = require('./routes/Post.js');
//var cors = require('cors');


app.set('port', (process.env.PORT || 3000));
//app.use(cors());
//app.use('/', posts);
//app.use('/', users);
var messages = [
    {
        username:"Dany",
        message:"I have a dream"
    },
    {
        username:"Sang",
        message:"Wake me up when the September end"
    },
    {
        username:"David",
        message:"Hello, can you hear me"
    },{
        username:"Hana",
        message:"Yolo!!!!!!!"
    }
]
app.get('/', function(req, res) {
    res.send("Hello world");
});
app.get('/messages',function (req,res) {
    res.json(messages)
});
app.post('/messages',function (req,res) {
    messages.push({
        username: rep.body.username,
        message: req.body.message
    });
    res.json(messages);
});
app.listen(app.get('port'), function() {

    console.log('Node app is running on port', app.get('port'));

});