import express, { Express, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const app: Express = express();

app.use(express.static(path.join(__dirname, '/../storage/ffmpeg')));

app.get('/up', (_, response: Response) => {
  response.status(200).send({ uptime: process.uptime() });
});

app.get('master.m3u8', async (request: Request, response: Response) => {
  const filePath = path.join(__dirname, `/../storage/ffmpeg/master.m3u8`);
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(response);
});

app.listen(8000, () => console.log('[server]: running at http://localhost:8000'));
