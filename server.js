const express = require("express");
const converter = require("xml-js");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 4000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.static(path.join(__dirname, "../build")));

// search 경로로 진입 시 axios로 서버에서 파일을 get
app.get("/search", (req, res) => {
  // Header.js에서 설정한 params를 가져오기
  const keyword = req.query.keyword;
  const v = req.query.v;
  const key = req.query.key;
  axios
    .get(
      `https://www.maniadb.com/api/search/${keyword}/&sr=artist/&display=100&key=${key}&v=${v}`
    )
    .then((result) => {
      // 받아오는 결과가 xml 형식 뿐이라 라이브러리로 json 파싱
      const jsonResult = converter.xml2json(result.data);
      res.send(jsonResult);
    })
    .catch((error) => console.log(error));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}/`);
});
