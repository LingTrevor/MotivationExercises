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

            randomDate(start, end);

            rl.close();
        });
    });
});

function randomDate(start, end) {
    var start = new Date(start);
    var end = new Date(end);
    var date = new Date(+start + Math.random() * (end - start));
    console.log('Start: ', start);
    console.log('Lõpp: ', end);
    console.log('Random TS: ', date);
};

