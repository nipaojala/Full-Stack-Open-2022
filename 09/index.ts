import express from 'express';
import CalculateBmi from './bmiCalculator';
import calculator from './file';

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
    res.send({error: "malformatted parameters"});
  }

});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if ( !value1 || isNaN(Number(value1))) {
    return res.status(400).send({ error: '...'});
  }
  // more validations here...

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op);
  return res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});