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


let equationHistory = [];



app.post ('/equation', (req, res) => {
    console.log('in POST /equation', req.body);
    let answer = req.body;

    let thisAnswer = new solve(answer.firstNumber, answer.calculation, answer.secondNumber);

    // add new info to mathHistory array
    equationHistory.unshift(thisAnswer);
})


function solve(firstNum, calc, secondNum) {
this.firstNumber = firstNum;
this.calculation = calc;
this.secondNumber = secondNum;
this.answerEquation = solveAnswer(firstNum, calc, secondNum);
}

function solveAnswer(numOne, action, numTwo) {
    let finalAnswer = 
        Number(firstNum) + calc + Number(secondNum);
    console.log(finalAnswer);
}