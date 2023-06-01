import app from './src/app'
import express from 'express';
import path from 'path'

const port = process.env.PORT || 4000;

app.use('/static', express.static(path.join(__dirname + '/public')));

app.listen(port, () =>
    console.log(`🚀 Server ready at: http://localhost:${port}`)
);