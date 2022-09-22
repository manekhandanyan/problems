const express = require('express');
const app = express();
const port = 3001;
const FirstProblem = require('./problems/problem1');
const SecondProblem = require('./problems/problem2');
const firstProblemInstance =  new FirstProblem();
const secondProblemInstance =  new SecondProblem();
firstProblemInstance.compareMostAndLeastSignificantBytes(0);
secondProblemInstance.printFunction('Here is an %s string %d you', 4, 'awesome');

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})