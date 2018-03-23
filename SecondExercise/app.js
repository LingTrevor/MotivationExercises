const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log('Sisestage aasta numbrid, alates mis aastast kuni mis aastani Te soovite TIMESTAMPE genereerida.\n');

var start = "";
var end = "";
var timestampAmount = "";

rl.question('Algus aasta? \n', (startYear) => {
    rl.question('Lõpp aasta? \n', (endYear) => {
        rl.question('Timestampide kogus? \n', (tsAmount) => {

            start += startYear;
            end += endYear;
            timestampAmount += tsAmount;

            randomDate(start, end, timestampAmount);

            rl.close();
        });
    });
});

var generatedTimestamps = [];
var months = [];
function randomDate(start, end, timestampAmount) {
    var start = new Date(start);
    var end = new Date(end);
    var amountTs = parseInt(timestampAmount);
    console.log('Start: ', start);
    console.log('Lõpp: ', end, '\n');


    for (var i = 0; i < amountTs; i++) {
        var date = new Date(+start + Math.random() * (end - start));
        generatedTimestamps.push(date);
    };
    console.log('\n Genereeritud timestamps massiiv: \n', generatedTimestamps);

    var today = new Date();
    var ages = [];
    console.log('Tänane: ', today);
    for (var i = 0; i < generatedTimestamps.length; i++) {
        var msAge = today - generatedTimestamps[i];
        var msAgeObj = new Date(msAge);
        var age = Math.abs(msAgeObj.getUTCFullYear() - 1970);
        ages.push(age);
        var month = new Date(generatedTimestamps[i]).getMonth() + 1;
        months.push(month);
    };
    console.log('Months: ', months);
    console.log('Vanuste massiiv: ', ages);

    var agesSum = 0;
    for (var i = 0; i < ages.length; i++) {
        agesSum += parseInt(ages[i]);
    };
    console.log('Vanuste summa: ', agesSum);
    var avgAge = agesSum / ages.length;
    console.log('Keskmine vanus: ', avgAge);

    var maxAge = Math.max.apply(Math, ages);
    console.log('Suurim vanus: ', maxAge);

    var minAge = Math.min.apply(Math, ages);
    console.log('Väikseim vanus: ', minAge);
};


