const express = require('express');
const db = require('./DB/DB_conn');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// Add your routes here

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
