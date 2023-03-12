const express = require('express');
const app = express();

// Add your routes here

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});