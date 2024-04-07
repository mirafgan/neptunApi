const express = require("express");
const router = require("./routes");
const cors = require("cors")
const app = express();
app.use(router);
app.use(cors())
app.listen("8011")