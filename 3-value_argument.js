const arguments = process.argv.slice(2);

if (arguments.length === 0) {
  console.log("No argument");
} 
else {
  console.log(arguments);
}