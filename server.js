// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv').config();
// const cors = require("cors");

// const mysql = require('mysql');

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'password',
//     database: 'movieapp'
// });



// const users = [{id: 1, name: 'Henry'}]

// app.use(express.json());
// app.use(cors());

// app.get('/testAPI', (req, res) => {
//     res.send('Hello, testAPI is working');
// })

// app.post('/signup', (req, res) => {
//     const hashedPassword = bcrypt.hash(req.body.password, 10);
//     db.query(`INSERT INTO users (first_name, last_name, username, email, password) VALUES ("${req.body.firstName}", "${req.body.lastName}", "${req.body.username}", "${req.body.email}", "${hashedPassword}")`, (err, res) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.send({redirect: '/'})
//         }
//     })
// })

// app.get('/insert', (req, res) => {
//     db.query('INSERT INTO users (first_name, last_name, password) VALUES ("Henry", "Tran", "pineapple")', (err, result) => {
//         if(err) {
//             console.log(err)
//         }
//         res.send(result);
//     })
// })

// app.post('/users', async (req, res, next) => {
//     try {
//         // generates a salt to prepend to the hash password for more security
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user);
//         res.status(201).send();
//     } catch(e) {
//         res.status(500).send();
//     }
// })

// app.post('/users/login', async (req, res, next) => {
//     const user = users.find(user => user.name === req.body.name);
//     if(user == null) {
//         return res.status(400).send('Cannot find user');
//     }
//     try {
//       if(await bcrypt.compare(req.body.password, user.password)) {
//           res.send('Success');
//       }  
//     } catch(e) {
//         res.status(500).send()
//     }
// })

// app.post('/login', (req, res) => {
//     // Authenticate user
//     const username = req.body.username;
// })

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on port 5000');
});