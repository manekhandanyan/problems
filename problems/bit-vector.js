class BitVector {

     setBit (number, position, reset = false)  {
       let mask = 1 << position;
       if(reset) {
           number &= ~mask;
       } else number |= mask;
       return number
    }

     getBit(number, bitPosition) {
        console.log((number & (1 << bitPosition)) === 0 ? 0 : 1);
        return (number & (1 << bitPosition)) === 0 ? 0 : 1;
    }

}
module.exports = BitVector;