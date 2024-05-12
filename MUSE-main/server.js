const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'musecompany',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new user
app.post('/api/users', (req, res) => {
  const { username, email, password } = req.body;
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Error creating user' });
      return;
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});