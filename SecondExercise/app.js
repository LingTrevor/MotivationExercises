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
            // console.log('Start: ', startYear);
            // console.log('End: ', endYear);
            // console.log('TS Kogus: ', tsAmount);
            start += startYear;
            end += endYear;
            timestampAmount += tsAmount;
            console.log('Start: ', start, 'End: ', end, 'TimeStamps Amount: ', timestampAmount);
            rl.close();
        });
    });
});

