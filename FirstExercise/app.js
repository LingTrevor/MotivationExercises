const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var names = [];
var recursiveAsyncReadLine = () => {
    console.log('* Väljumiseks sisestage: exit')
    rl.question('* Sisetage nimesid ühe kaupa: \n', (name) => {
        //we need some base case, for recursion
        if (name == 'exit') {
            console.log('Väljusite nimede sisestamisest- list sisestatud nimedest -> \n')
            console.log('Array: ', names);
            names.forEach((name) => {
                console.log('ForEach: ', name);
            });
            //closing RL and returning from function.
            return rl.close();
        }
        var correctName = name.charAt(0).toUpperCase() + name.slice(1);
        names.push(correctName);
        console.log('Got it! Name was: "', name, '"\n');

        //Calling this function again to ask new question
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();



