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

//////////////////
//Testimiseks ->//
//////////////////

var story = "The data liia was gathered using Facebook's peeter infrastructure at that time, and many helen other developers had taken advantage of it - but the data was not authorised for piia them to share with others. The other key point is that even the people directly taking part in the margus personality quiz would have had no idea that they were potentially sharing their data oskar with Donald Trump's election campaign. ";
var splitStory = story.split(' ');
//console.log(splitStory);
var name = ['Peeter', 'Helen', 'Piia', 'Margus', 'Oskar', 'Liia'];
//console.log(name);
//name = name.map(name => name.toLowerCase());
//console.log(name);

var correctNames = [];
for(var i = 0; i < splitStory.length; i++){
    for(var j = 0; j < name.length; j++){
        if(splitStory[i].toLowerCase()===name[j].toLowerCase()){
            splitStory[i] = name[j];

        }
    }
}
console.log(splitStory);
// correctNames = correctNames.map(correctNames=> correctNames.charAt(0).toUpperCase()+ correctNames.slice(1));
// console.log(correctNames);

// for( var i = 0; i < splitStory.length; i++){
//     if(splitStory[i] === 'data'){
//         splitStory[i] = 'tere';
//         console.log('Works');
//     }
//    //console.log(splitStory[i]);
// };
// console.log(splitStory);



// for(var j = 0; j < name.length; j++){
//     console.log(name[j]);
// };




