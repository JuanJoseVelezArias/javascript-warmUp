#!/usr/bin/node

const args = process.argv.slice(2);
const mylist = [];

for(let i = 0; i < args.length; i++){
    mylist.push(args[i])
    if(isNaN(parseInt(args[i]))|| args[0] == 0){
        console.log(0)
    }
}

const new_list = mylist.sort((a, b) => a - b);
const last_2 = new_list[new_list.length - 2];
console.log(last_2);