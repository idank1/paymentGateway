const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
module.exports = app;
