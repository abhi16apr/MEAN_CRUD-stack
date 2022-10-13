var express = require('express');
var app = express();
var dbConn = require('./database')
var bodyParser = require('body-parser');
var cors = require('cors');
const user = require('./user');
//const userAdmin = require('./userAdmin');
const useradmin1 = require('./userAdmin1');
const { json } = require('express');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())



// Config of SQL pararameter to connect with NODE
// var con = mysql.createConnection({
//     host: "localhost",  // local host / ip address of your machine
//     user: "root",
//     password: "admin",
//     database: "world",
//     port: 3306
// });

//GETTING ALL userList
app.get('/useradmin1/list', function (req, res) {
    dbConn.query('SELECT * FROM useradmin1', function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });

 //ADD A NEW userList (ID AUTO INCREMENTS)
app.post('/useradmin1/create/', function (req, res) {
    let uL = new useradmin1(req.body.userId, req.body.name, req.body.activeForm, req.body.role, req.body.status, req.body.password)
    dbConn.query('INSERT INTO useradmin1 SET ?', uL, function (error, results) {
       if (error) throw error;
       return res.send({message: `Successfully inserted the record`});
    });
 });

//   //DELETING userList BY ID
// app.delete('/useradmin1/delete/:id', function (req, res) {
//     let userAdmin_id = req.params.id;
//     dbConn.query('DELETE FROM useradmin1 where id=?', userAdmin_id, function (error, results) {
//        if (error) throw error;
//        return res.send({message: `Location with the ${userAdmin_id} was deleted successfully`});
//     });
//  });

  //GETTING ALL userList
app.get('/useradmin1/get/:userId', function (req, res) {
    let userAdmin_id = req.params.id;
    dbConn.query('SELECT * FROM useradmin1 WHERE id=?', userAdmin_id, function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });

  //UPDATE A userList
app.put('/useradmin1/update/:userId', function (req, res) {
    let uL = new useradmin1 (req.body.userId, req.body.name, req.body.activeForm, req.body.role, req.body.status, req.body.password)
    let userAdmin_id = uL.userId;
    dbConn.query('UPDATE useradmin1 SET ? WHERE userId=?', [uL, userAdmin_id], function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });

 var server = app.listen(3001, function () {

    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 
 })