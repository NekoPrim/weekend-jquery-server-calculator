// SETUP
// terminal command: npm init --yes
// terminal command: npm install express --save
// add .gitignore file
// in .gitignore file "node_modules/"
// in .json file under "test" write "start": "node server/server.js"
// terminal command: npm start
// create variable to call expess and then a variable to run express
// terminal command: npm install nodemon (will have to do for each prodject)
//comand , auto import turn off
// terminal command: npm install body-parserconst express = require('express');

// setup express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// must have this before GET and POST
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
});


let equation = [];

let answer = [];




// receive values from client side
app.post ('/math', (req, res) => {
    console.log('in POST /math', req.body);

    // store values from client side
    let math = `${req.body.firstNum} ${req.body.operator} ${req.body.secondNum} =`;
    equation.unshift(math);
    console.log('equation', equation);

    solve(req.body.firstNum, req.body.operator, req.body.secondNum)

    res.sendStatus(201);

})


// function to change string into number equation
function solve(firstNum, operator, secondNum) {
    let total = 0;

    // change string values to number
    let first = Number(firstNum);
    let second = Number(secondNum);
    
    // make conditional for creating equation
    if(`${operator}` === '+'){
        total = (first + second);
        console.log(total);
    }
    else if(`${operator}` === '-'){
        total = (first - second);
        console.log(total);
        
    }
    else if(`${operator}` === '*'){
        total = (first * second);
        console.log(total);
        
    }
    else if(`${operator}` === '/'){
        total = (first / second);
        console.log(total);
    }

    // capture values and put into answers
    answer.unshift(`${equation} ${total}`);
    console.log('answer', answer);

    // clear equation
    equation = [];
}


app.get('/math', (req, res) => {
    console.log('in GET /math');

    res.send(answer);
})