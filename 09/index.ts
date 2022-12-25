import express from 'express';
import CalculateBmi from './bmiCalculator';
import exerciseCalculator from './exerciseCalculator';

const app = express();
app.use(express.json());
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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const note = req.body;
  console.log(note);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const daily_exercises:Array<unknown> = note.daily_exercises;
  daily_exercises.forEach(element => {
    if (isNaN(Number(element))) {
      return res.status(400).send({ error: 'malformatted parameters'});
    } else {
      return "moi";
    }
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (isNaN(Number(note.target))) {
    return res.status(400).send({ error: 'malformatted parameters'});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  } else if ( !note.daily_exercises || !note.target) {
    return res.status(400).send({ error: 'parameters missing'});
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const result = exerciseCalculator(note.daily_exercises, note.target);
  return res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});