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

function randomDate(start, end, timestampAmount) {
    var start = new Date(start);
    var end = new Date(end);
    var amountTs = parseInt(timestampAmount);
    console.log('Start: ', start);
    console.log('Lõpp: ', end);
    for (var i = 0; i < amountTs; i++) {
        var date = new Date(+start + Math.random() * (end - start));
        console.log("Random TS's: ", date);
    };
};

