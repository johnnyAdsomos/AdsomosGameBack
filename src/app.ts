import express from 'express';
import fs from 'fs'

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
        root: 'C:\\github\\AdsomosGameBack\\'
    };
    console.log(options)
    const fileName = `/public/images/centered/${champion}.jpg`
    res.sendFile(fileName, options, (err) => {})
    
})

app.use(route)

export default app;
