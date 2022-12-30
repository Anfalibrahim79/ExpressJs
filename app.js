const express = require('express')
const router = require('./router')

const app = express();
app.use(router);


app.listen(3001, () => console.log('server : http://localhost:3001'))