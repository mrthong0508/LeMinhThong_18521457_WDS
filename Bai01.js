const express = require('express')
const app = express()
const port = 5000
var bodyParser = require("body-parser")

app.get('/xin-chao', (req, res) => res.send('Xin Chao!'))

app.post('/xin-chao', function (req, res) {
	var Input = req.body.userInput;
	res.send(Input);
})

app.get('/xin-chao/:random', function (req, res, next) {
	var randomInput = req.params.random;
	if(randomInput == "error") {
		throw new Error('441');
		next(Error);
	}
	res.send(randomInput);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(441).send({status:441, message: 'error'}); 
})

app.listen(port, function(){
  console.log("PORT 5000 nhe!");
})
