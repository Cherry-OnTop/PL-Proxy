const express = require("express");
const request = require("request");
const app = express();
const cors = require("cors");

app.use(express.static(__dirname));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  let url = req.url.split("/");
  let path = url.slice(2).join("/");
  console.log(path);
  let endpoint = url[1];
  if (endpoint === "main") {
    let proxy =
      "http://ec2-3-17-128-193.us-east-2.compute.amazonaws.com/" + path;
    request(proxy)
      .on("error", err => console.log(err))
      .pipe(res);
    // console.log(proxy);
  } else if (endpoint === "details") {
    let proxy =
      "http://ec2-18-218-63-15.us-east-2.compute.amazonaws.com/" + path;
    console.log(proxy);
    request(proxy)
      .on("error", err => console.log(err))
      .pipe(res);
  } else if (endpoint === "critics") {
    let proxy =
      "http://ec2-3-16-138-173.us-east-2.compute.amazonaws.com/" + path;
    // console.log(proxy);
    request(proxy)
      .on("error", err => console.log(err))
      .pipe(res);
  } else if (endpoint === "sidebar") {
    let proxy = "http://18.222.207.221:9004/" + path;
    request(proxy)
      .on("error", err => console.log(err))
      .pipe(res);
  }
});
app.get("/", (req, res) => {});

app.listen(process.env.PORT || 3000);
