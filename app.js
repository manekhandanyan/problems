const express = require('express');
const app = express();
const port = 3002;
const FirstProblem = require('./problems/problem1');
const SecondProblem = require('./problems/problem2');
const ThirdProblem = require('./problems/problem3');
const FourthProblem = require('./problems/problem4');
const BitVector = require('./problems/bit-vector');
const firstProblemInstance =  new FirstProblem();
const secondProblemInstance =  new SecondProblem();
const thirdProblemInstance = new ThirdProblem();
const fourthProblemInstance = new FourthProblem();
const BitVectorInstance = new BitVector();
// firstProblemInstance.compareMostAndLeastSignificantBits(5);
// secondProblemInstance.printFunction('Here is an %s string %d you', 4, 'awesome');
// thirdProblemInstance.findIndexOf('awesome', 'e')
// fourthProblemInstance.splitBy('hi.there.', ".")
BitVectorInstance.setBit(23, 0)
BitVectorInstance.getBit(23, 3)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})