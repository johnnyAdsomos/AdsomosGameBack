import express from 'express';
import path from 'path'
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();
app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' })
})

route.get('/assets/centered/:champion', (req, res) => {
    const champion = req.params.champion
    const options = {
        root: path.join(__dirname)
    };
    const fileName = `./assets/centered/${champion}.jpg`
    res.sendFile(fileName, options, (err) => { console.log(err)})
})

app.use(route)

export default app;
