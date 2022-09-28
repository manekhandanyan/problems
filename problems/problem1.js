class Problem1 {

     dec2bin(dec) {
         return (dec.toString(2));
     }

     compareMostAndLeastSignificantBits(number) {
         const binaryNum = this.dec2bin(number);
         const arrayFromStr =  Array.from(binaryNum);
         const numberOfZerosToAdd =  32 - arrayFromStr.length;
         for (let i = 0; i < numberOfZerosToAdd ; i++) {
             arrayFromStr.unshift('0')
         }
         const mostSignificantBit = arrayFromStr.slice(0,1).toString();
         const lastSignificantBit = arrayFromStr.slice(-1).toString()
         if (mostSignificantBit === lastSignificantBit){
             console.log('they are equal!')
             return true;
         } else {
             console.log('they are not equal!')
             return false
         }
     }

}
 module.exports = Problem1;
