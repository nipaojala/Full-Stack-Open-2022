import express from 'express';
import CalculateBmi from './bmiCalculator';
const app = express();
const PORT = 3000;

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;

  if (!isNaN(Number(weight)) && !isNaN(Number(height))) {
    const bmi = CalculateBmi(Number(req.query.height), Number(req.query.weight));
  res.send({weight: weight,
    height: height,
    bmi: bmi});
  } else {
    res.send({error: "malformatted parameters"})
  }

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});