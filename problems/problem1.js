class Problem1 {

     dec2bin(dec) {
         return (dec.toString(2));
     }

     compareMostAndLeastSignificantBytes(number) {
         const binaryNum = this.dec2bin(number);
         const arrayFromStr =  Array.from(binaryNum);
         const numberOfZerosToAdd =  32 - arrayFromStr.length;
         for (let i = 0; i < numberOfZerosToAdd ; i++) {
             arrayFromStr.unshift('0')
         }

         const mostSignificantByte = arrayFromStr.slice(0,8).toString();
         const lastSignificantByte = arrayFromStr.slice(-8).toString()

         if (mostSignificantByte === lastSignificantByte){
             console.log('they are equal!')
             return true;
         } else {
             console.log('they are not equal!')
             return false
         }
     }

}
 module.exports = Problem1;
