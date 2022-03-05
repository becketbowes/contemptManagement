const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res) => {
    res.status(404).end();    
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});