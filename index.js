
var express = require('express'); 
var app = express(); 

app.listen(3000, function() { 
	console.log('server running on port 3000'); 
} ) 


app.get('/name', callName); 

function callName(req, res) { 
	
	var spawn = require("child_process").spawn; 
	
	
	
	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	var process = spawn('python',["./hello.py",req.query.firstname, req.query.lastname] ); 

	
	process.stdout.on('data', function(data) { 
		res.send(data.toString()); 
	} ) 

       process.stderr.on('data', (data) => {
           res.send(`error:${data}`);
        });
       
       process.on('close', () => {
          res.send("Closed");
      });

} 

// save code as start.js 

