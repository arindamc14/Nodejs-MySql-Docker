const mysql = require('mysql');

const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config({path:'../../.env'});

let dbPassword = process.env.MYSQL_ROOT_PASSWORD;

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : `${dbPassword}`,
    database : 'usersdb'
  });
   
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("MySQL connected!")
  });

app.get('/', async function(req,res) {    
  res.send('Nodejs-MySQL on Docker')
  });  


// app.get('/get', async function(req, res) {

//     let username = req.query.username;
//     console.log(username);
//     var sql = 'SELECT firstName, lastName FROM users WHERE username = ' + mysql.escape(username);

//     db.query(sql, (err, row) => {
//       if(err) throw err;

//       const fullName = row[0].firstName.concat(' ', row[0].lastName);
//       console.log(fullName);


//       res.send(fullName)
//     });
//   });


// app.get('/set', async function(req, res) {
//   console.log("inside set route")

//     let username = req.query.username;
//     let firstName = req.query.name;
//     let lastName = req.query.lastname;

//     console.log(firstName);

//     db.query("INSERT INTO users values(null, ?, ?, ?)",[username,firstName,lastName],
//             function(err,result){
//                 if(err) { return console.log("Error when registration");}
//                 console.log("added new user");
//             }); 
//        });

const port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log(`Server is listening on port ${port}`)
});