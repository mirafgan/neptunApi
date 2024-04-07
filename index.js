const express = require("express");
const router = require("./routes");
const cors = require("cors")
const app = express();
app.use(cors({
    origin: "*",
}))
app.use(router);
app.listen("8011")