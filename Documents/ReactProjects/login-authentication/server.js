const express = require('express');
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

const users = [];

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

app.post('/api/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password!== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashedPassword };
  users.push(user);
  res.json({ message: 'Signup successful' });
});

app.get('/api/login', async (req, res) => {
  res.json(users);
});

// Continued code
app.get('/api/dashboard', authenticate, (req, res) => {
  const userId = req.user.id;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ message: `Welcome, ${user.email}!` });
});

function authenticate(req, res, next) {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.user = users.find((user) => user.id === decoded.userId);
      next();
    });
  } else {
    return res.status(401).json({ error: 'No token provided' });
  }
}

app.listen(8080, () => {
  console.log('Server started on port 8080');
});