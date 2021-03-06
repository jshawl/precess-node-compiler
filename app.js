var express = require('express');
var less = require('less');
var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/less', function( req, res ){
  var less_input = req.body.less;
  less.render(less_input, function( e, css ){
    if (e) {
      res.send('Line '+e.line+': '+e.message);
      console.log('there was an error!', e);
    }else {
      res.send(css);
    }
  });
});

app.listen(3000, function(){
  console.log('Listening on port 3000...');
});