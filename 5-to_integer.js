#!/usr/bin/node

const args = process.argv.slice(2);

const intValue = parseInt(args[0], 10);

if (args.length === 0) {
    console.log("Not a number");
} 
    
else if(!isNaN(intValue)){
    console.log("My number: ", intValue)
}
else {
    console.log("Not a number");
}