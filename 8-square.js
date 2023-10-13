#!/usr/bin/node

const args = process.argv.slice(2);
if (args.length === 1){
    for (let i = 0; args[0] > i; i++ ){
        for (let i = 0; args[0] > i; i++ ){
            process.stdout.write("X")
        }     
        console.log("")
    }
}
else if(args.length === 0){
    console.log("Missing number of occurrences");
}
else{

}