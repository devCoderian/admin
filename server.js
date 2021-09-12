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

const multer = require('multer'); //별도의 설치 필요 
const upload = multer({dest:'./upload'}); //업로드 폴더 설정
app.get('/api/customer', (req, res)=>{
  connection.query(
    "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
    (err, rows, field) =>{
      res.send(rows);
    }
  );
  //  res.send();
});

//image경로를 통해 업로드 폴더를 사용자가 접근하게 하기 위해 설정
app.use('/image', express.static('./upload'));

app.post('/api/customer', upload.single('image'), (req, res)=>{
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) =>{
        res.send(rows);
        // console.log(rows);
        console.log(err);
    });
});

app.delete('/api/customer/:id', (req, res)=>{
  let sql = 'delete from CUSTOMER WHERE id = ?'
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) =>{
        res.send(rows);
        console.log(rows);
        console.log(err);
    });
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