// Import the coinFlip function from your coin.mjs file
import {flipACoin} from "./modules/coin.mjs";
// import ('minimist')(process.argv.slice(2));

let callString = process.argv.slice(2);

// args["call"];

if(callString.length == 0) {
    console.log("Error: no input.")
} else if (callString.toString().includes('=')) {
    const index = callString.toString().indexOf('=');
    let callSubString = callString.toString().substring(index+1);
    if(!(callSubString == 'heads' || callSubString == 'tails')) {
        console.log("Usage: node guess-flip.js --call=[heads|tails]");
    } else {
        const results = flipACoin(callSubString);
        let flipResult = 'tails';
        if(results == 'win' && callSubString == 'heads') {
            flipResult = 'heads';
        // } else if (results == 'win' && callSubString == 'tails') {
        //     flipResult = 'tails';
        } else if (results == 'lost' && callSubString == 'tails') {
            flipResult = 'heads';
        } else if (results == 'lost' && callSubString == 'heads') {
            flipResult = 'tails';
        }
        console.log("call: '" + callSubString + "', flip: '" + flipResult + "', results: '" + results + "'");
    }
}

// Call the coinFlip function and put the return into STDOUT
// console.log(flipACoin(args.call));