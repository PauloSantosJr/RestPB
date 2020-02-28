const express = require('express');
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var usuario_array = [];
//var usuario = {};


app.get('/', (req, res) => {
    res.send('Hello Express app!')
});

app.get('/pb', (req, res) => {
    //res.send('Hello Express app!')
    res.json([{ id: 123, name: 'Paulo' }, { id: 541, name: 'José' }, ])
});

app.get('/usuario', (req, res) => {
    //res.send('Hello Express app!')
    res.json(usuario_array);
});

app.post("/usuario", function(req, res, next) {

    if (req.body != "") {

        console.log(req.body);
        //usuario_array.id = req.body.id;
        //usuario_array.name = req.body.name;
        usuario_array.push(req.body)
        console.log(usuario_array);

        res.status(201).send({
            message: "done"
        });

    } else {
        res.status(400).send({
            message: "check the value"
        });
    }

});



app.listen(process.env.PORT || 3000, () => {
    console.log('server started');
});