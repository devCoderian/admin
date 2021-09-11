const fs =require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res)=>{
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, field) =>{
      res.send(rows);
    }
  );
  //  res.send();
});

app.listen(port, () => console.log(`Listening server ${port}`));


// res.send([
//   {
//       'id': 1,
//       'image': 'http://placeimg.com/64/64/any',
//       'name': '유저1',
//       'birth':'960719',
//       'gender':'여',
//       'job':'무직'
//     },
//     {
//       'id': 2,
//       'image': 'http://placeimg.com/64/64/any',
//       'name': '유저2',
//       'birth':'960719',
//       'gender':'여',
//       'job':'무직'
//     },
//     {
//       'id': 3,
//       'image': 'http://placeimg.com/64/64/any',
//       'name': '유저3',
//       'birth':'960719',
//       'gender':'여',
//       'job':'무직'
//     }
// ]);