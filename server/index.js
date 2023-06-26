const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Perform server-side validations and login logic here
  // You can check email format, password requirements, and validate against a database

  if (email === 'validemail@example.com' && password === 'validpassword') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
