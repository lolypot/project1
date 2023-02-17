const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// just proxy all calls to pass CORS
app.all("/", (req, res) => {
  const options = {
    url: req.body.requestUrl,
    method: req.body.method,
    data: req.body.requestData,
  };

  console.log(options);

  axios(options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
