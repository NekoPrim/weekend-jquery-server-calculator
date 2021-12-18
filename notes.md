<!-- server setup -->

Terminal command: npm init –yes
Terminal command: npm install express –save
Add .gitignore file
In .gitignore file “node_modules/”
In .json file under “test” write “start”: “node server/server.js” (nodemon instead of node)
Terminal command: npm start					    ↑
Create variable to call express and then a variable to run express	    ↑
Terminal command: npm install nodemon (will have to do for each project)
Terminal command: npm install body-parser

<!-- Calculator check list -->

technical tasks
[X] project setup
    [X] server.js file
    [X] set up express
    [X] .gitignore file
    [X] modify .json file
        [X] nodemon
    [X] bodyParser
    [X] server folder
        [X] index.html file
        [X] scripts folder
            [X] client.js file
            [X] jquery.js file
        [X] styles folder
            [X] styles.css file
[X] html file
    [X] source js, jQuery, and css
    [X] form
    <!-- table/form -->
        [X] 2 input elements
        [X] + - * / buttons
        [X] clear button "c"
        [X] submit "="
    [X] table
        [X] header
            [X] equation
            [X] answer
        [X] body
[ ] server.js setup
<!-- LOGIC MUST BE IN SERVER -->
    [ ] setup port 5000
    [ ] setup static files
    [ ] math equations function
    [ ] '/equation-numbers GET
        [ ] equationHistory.push
    [ ] '/equation-answer POST
        [ ] res.sendStatus(201);
    [ ] store equationHistory
    [ ] store mathAnswer
    [ ] send results equation-answers
        [ ] 
[ ] client.js
    [X] source jQuery
    [ ] set up functioning submit
        [X] prevent page reload
    [ ] set up AJAX GET request
        [ ] method/url/data
        [ ] .catch error
        [ ] send 
    [ ] set up AJAX POST response
        [ ] method/url
        [ ] .catch error
    [ ] append equationHistory to DOM
    [ ] append mathAnswer to DOM
[ ] CSS file
    [ ] add a little style