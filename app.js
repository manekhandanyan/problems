const express = require('express');
const app = express();
const port = 3002;
const FirstProblem = require('./problems/problem1');
const SecondProblem = require('./problems/problem2');
const ThirdProblem = require('./problems/problem3');
const FourthProblem = require('./problems/problem4');
const firstProblemInstance =  new FirstProblem();
const secondProblemInstance =  new SecondProblem();
const thirdProblemInstance = new ThirdProblem();
const fourthProblemInstance = new FourthProblem();
firstProblemInstance.compareMostAndLeastSignificantBytes(0);
secondProblemInstance.printFunction('Here is an %s string %d you', 4, 'awesome');
thirdProblemInstance.findIndexOf('awesome', 'e')
fourthProblemInstance.splitBy('hi.there.', ".")

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})