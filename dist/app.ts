import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});