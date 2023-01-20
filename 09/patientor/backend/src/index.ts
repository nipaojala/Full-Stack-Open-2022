import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});