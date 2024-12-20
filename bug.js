const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a database error
      throw new Error('Database connection failed');
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});