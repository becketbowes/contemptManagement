const express = require('express');
const db = require('./db/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

// Use apiRoutes
app.use('/api', routes);

//bad request filter 
app.use((req, res) => {
    res.status(404).end();    
});

//start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });