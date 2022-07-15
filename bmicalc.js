const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + ("/index.html"));
});

app.post("/", function(req, res) {

  var height = Number(req.body.ht);

  var weight = Number(req.body.wt);

  var bmi = (weight / (Math.pow(height, 2)));

  if (bmi < 18.5) {
    res.send("Your BMI is " + bmi + ", so you are underweight.");
  }

  if (bmi >= 18.5 && bmi <= 24.9) {
    res.send("Your BMI is " + (bmi) + ", so you have normal weight.");
  }
  if (bmi > 24.9) {
    res.send("Your BMI is " + bmi + ", so you are overweight");
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server has started on 3000port");
});
