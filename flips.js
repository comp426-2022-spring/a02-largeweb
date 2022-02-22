// Import the coinFlip function from your coin.mjs file
// const coin = require("./modules/coin.js");
import {coinFlips} from "./modules/coin.mjs";

// const args = require('minimist')(process.argv.slice(2));

// import * as minimist from './node_modules/minimist/index.js';

let callString = process.argv.slice(2);
// // Call the coinFlip function and put the return into STDOUT
if(callString.length == 0) {
    callString = '1';
} else if (callString.toString().includes('=')) {
    const index = callString.toString().indexOf('=');
    callString = callString.toString().substring(index+1);
}
console.log(coinFlips(callString).toString());