class Problem2 {

    flags = {
        number: '%d',
        string: '%s',
    }

   printFunction(stringArgument, ...chars) {
       chars.forEach((item) => {
            stringArgument = stringArgument.replace(this.flags[typeof item], item)
        })

        console.log(stringArgument)
    }

}
module.exports = Problem2;
