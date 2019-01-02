const express = require("express");
const request = require("request");
const app = express();

app.use(express.static(__dirname));

app.use((req, res, next) => {
  let url = req.url.split("/");
  let path = url.slice(2).join("/");
  let endpoint = url[1];
  if (endpoint === "main") {
    let proxy = "http://localhost:9001/" + path;
    console.log(proxy);
    request(proxy).pipe(res);
  } else if (endpoint === "details") {
    let proxy = "http://localhost:9002/" + path;
    request(proxy).pipe(res);
  } else if (endpoint === "critics") {
    let proxy = "http://localhost:9003/" + path;
    request(proxy).pipe(res);
  } else if (endpoint === "sidebar") {
    let proxy = "http://localhost:9004/" + path;
    request(proxy).pipe(res);
  }
});

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 3000);
