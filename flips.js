// Import the coinFlip function from your coin.mjs file
// const coin = require("./modules/coin.js");
import {coinFlips} from "./modules/coin.mjs";

// const args = require('minimist')(process.argv.slice(2));

import * as minimist from './node_modules/minimist/index.js';

const callString = process.argv.slice(2);
// // Call the coinFlip function and put the return into STDOUT
console.log(coinFlips(callString));