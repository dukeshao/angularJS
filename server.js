const express = require("express");
const app = express();
app.use(express.static("./app"));
app.listen(5500, function () {
  console.log("serve is listen on port 5500")
})