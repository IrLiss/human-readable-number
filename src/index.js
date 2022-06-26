module.exports = function toReadable(number) {
    const unitsArr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numUnits = number % 10;
    let numDozens = Math.trunc(number / 10);
    let numUnitsHundred = (number - Math.trunc(number / 100) * 100);
    let numDozensHundred = Math.trunc((number - Math.trunc(number / 100) * 100) / 10);

    if (number < 20) {
        return unitsArr[number];
    } else if (number >= 20 && number < 100) {
        if (numUnits === 0) {
            return dozensArr[numDozens - 2];
        } else {
            return dozensArr[numDozens - 2] + ' ' + unitsArr[numUnits];
        }
    } else {
        if (number % 100 === 0) {
            return unitsArr[Math.round(number / 100)] + ' hundred';
        } else {
            if (number % 100 > 0 && number % 100 < 20) {
                return unitsArr[Math.trunc(number / 100)] + ' hundred ' + unitsArr[numUnitsHundred];
            } else if (number % 100 % 10 === 0) {
                return unitsArr[Math.trunc(number / 100)] + ' hundred ' + dozensArr[numDozensHundred - 2];
            } else {
                return unitsArr[Math.trunc(number / 100)] + ' hundred ' + dozensArr[numDozensHundred - 2] + ' ' + unitsArr[numUnitsHundred % 10];
            }
        }
    }
}
