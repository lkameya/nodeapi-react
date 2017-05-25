const port = process.env.PORT || 8000;

const express = require('express');
const palindrome = require('./functions/palindrome.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'hahaha'});
});

router.route('/palindrome')
    .post((req, res) => {

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        const str = req.body.name;
        console.log(str);
        if(palindrome(str)) res.status(200).json('IS A PALINDROME');
        else res.status(400).send('IS NOT A PALINDROME');
    });

app.use('/api', router);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

