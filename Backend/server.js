const express = require('express');
const { conn } = require('./DB/DB_conn');
const cors = require('cors');
const app = express();

require('dotenv').config();

const uploadRouter = require('./Routes/Routers/uploadFile');
const downloadRouter = require("./Routes/Routers/downloadFile");

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(uploadRouter);
app.use(downloadRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
