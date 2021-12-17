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

<!-- check list -->

technical tasks
[ ] prodject setup
    [ ] server.js file
    [ ] set up express
    [ ] .gitignore file
    [ ] modify .json file
        [ ] nodemon
    [ ] bodyParser
    [ ] server folder
        [ ] index.html file
        [ ] scripts folder
            [ ] client.js file
            [ ] jquery.js file
        [ ] styles folder
            [ ] styles.css file
[ ] html file
    [ ] source js, jQuery, and css
    <!-- [ ] form -->
        <!-- [ ] input field for each player number guess -->
        <!-- [ ] submit -->
[ ] CSS file
    [ ] add a little style
[ ] server.js setup
    [ ] setup port 5000
    [ ] setup static files
    <!-- [ ] generate random number function 1 to 25 -->
    <!-- [ ] '/guess-history GET -->
    <!-- [ ] '/guess POST -->
    <!-- [ ] store the prevous guess's -->
    <!-- [ ] send results for guess's -->
        <!-- [ ] high, low, correct -->
    <!-- [ ] reformate guessHistory as object -->
[ ] client.js
    [ ] source jQuery
    [ ] set up functioning submit
    [ ] set up AJAX
    <!-- [ ] append guess's to DOM -->
    <!-- [ ] append restart button if winner -->
    <!-- [ ] total guess's counter -->
    <!-- [ ] .empty() -->