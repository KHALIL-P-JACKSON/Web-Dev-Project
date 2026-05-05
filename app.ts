import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port: number = 3000;

app.use(express.static(__dirname));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html')); // send HTML file on GET request
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});