class IndexOfASymbol {

    findIndexOf (line, symbol) {
       let lineArr = Array.from(line)
        let arrayOfIndexes = [];

       lineArr.map((item, index) => {
           if(item === symbol) {
               arrayOfIndexes.push(index)  ;
           }
       })
        return arrayOfIndexes;


    }

}
module.exports = IndexOfASymbol;