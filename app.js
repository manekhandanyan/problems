const express = require('express');
const app = express();
const port = 3000;
const FirstProblem = require('./problems/problem1');
const problemInstance =  new FirstProblem();
problemInstance.compareMostAndLeastSignificantBytes(0)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})