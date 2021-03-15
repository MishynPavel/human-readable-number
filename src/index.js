module.exports = function toReadable (number) {
  let number__zero__twelve = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    number__divisible__ten = [ "" ,"ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if (number < 100) {
      return lower__hundred (number);
    }
    else if (number%100 == 0) {
      return number__zero__twelve[number/100] + " hundred"
    }
    else {
      return number__zero__twelve[Math.floor(number/100)] + " hundred " + lower__hundred (number%100)
    }
    function lower__hundred (number) {
      if (number < 20) {
        return number__zero__twelve[number]
      }
      if (number < 100) {
        if (number%10 == 0) {
          return number__divisible__ten[number/10]
        }
        else {
          return number__divisible__ten[Math.floor(number/10)] + " " + number__zero__twelve[number%10]
        }
      }
    }
}
