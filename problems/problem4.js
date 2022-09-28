class SplitBy {

    splitBy (line, delimiter) {
        let arrayFromLine = [...line];
        arrayFromLine.map((item, index) => {
            if (item === delimiter) {
                arrayFromLine.splice(index,1)
            }
        })
        console.log(arrayFromLine);
    }

}
module.exports = SplitBy;