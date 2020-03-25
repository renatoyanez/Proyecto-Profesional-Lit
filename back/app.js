//Here bellow starts the requirements of your app as well as the server starting

/**REMEMBER TO UNCOMMENT EVERYTHING YOU NEED */

const db = require('./db/db');
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express();
const propiedadesRoutes = require("./routes/propiedades")
//Find the meaning of...
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan("tiny"));
//...this code

app.use("/api/propiedades", propiedadesRoutes)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
}) //send the html file to render it 

db.sync({
    logging: false,
    force: false
})
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error)