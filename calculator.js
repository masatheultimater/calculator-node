/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extends: true}));

app.get('/', (req, res) => 
  res.sendFile(__dirname + "/index.html")
);

app.post("/", (req, res) =>{
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let result = n1 + n2;
  res.send("Result: " + result);
});

app.get("/bmiCalculator", (req, res) => {
  
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  let w = Number(req.body.weight);
  let h = Number(req.body.height);
  let bmi = w / Math.pow(h, 2);
  res.send("bmi: " + bmi);
});

app.listen(port, () => console.log(`Example app listening on port 3000!`));