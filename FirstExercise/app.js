const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var names = [];
var recursiveAsyncReadLine = () => {
    rl.question(' * Uus nimi: \n', (name) => {
        //we need some base case, for recursion
        if (name == 'exit') {
            console.log('Väljusite nimede sisestamisest- list sisestatud nimedest -> \n ->' + names, '\n');
            var story = "The data liia was gathered using Facebook's peeter infrastructure at that time, and many helen other developers had taken advantage of it - but the data was not authorised for piia them to share with others. The other key point is that even the people directly taking part in the margus personality quiz would have had no idea that they were potentially sharing their data oskar with Donald Trump's election campaign. ";
            var splitStory = story.split(' ');
            for (var i = 0; i < splitStory.length; i++) {
                for (var j = 0; j < names.length; j++) {
                    if (splitStory[i].toLowerCase() === names[j].toLowerCase()) {
                        splitStory[i] = names[j];
                    };
                };
            };
            var splitStory = splitStory.join(' ');
            console.log(splitStory);

            //closing RL and returning from function.
            return rl.close();
        };
        var correctName = name.charAt(0).toUpperCase() + name.slice(1);
        names.push(correctName);

        //Calling this function again to ask new name 
        recursiveAsyncReadLine();
    });
};
console.log(' * Väljumiseks sisestage: exit \n * Sisestage nimed ühe kaupa!');
recursiveAsyncReadLine();






