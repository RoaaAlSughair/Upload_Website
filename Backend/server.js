const express = require('express');
const db = require('./DB/DB_conn');
const cors = require('cors');
const app = express();

require('dotenv').config();

const uploadRouter = require('./Routes/Routers/uploadFile');

app.use(express.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// Add your routes here
app.use("/pdf", uploadRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
