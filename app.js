const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000

require('dotenv').config();
app.bodyParser().json();

app.use(bodyParser.json())

const mytoken = process.env.MYTOKEN;

//to verify the callback url from dashboard side - cloud api side
app.get('/webhook', (req, res) => {
    let mode = req.query["hub.mode"];
    let challange = req.query["hub.challenge"];
    let token = req.query["hub.verify_token"];


    if (mode && token) {

        if (mode === "subscribe" && token === mytoken) {
            res.status(200).send(challange);
        } else {
            res.status(403);
        }

    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))