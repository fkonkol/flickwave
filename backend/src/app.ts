import express, { Express, Response } from 'express';

const app: Express = express();

app.get('/up', (_, response: Response) => {
  response.status(200).send({ uptime: process.uptime() });
});

app.listen(8000, () => console.log('[server]: running at http://localhost:8000'));
