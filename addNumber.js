const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        //return sum;
        reader.close();
        completionCallback(sum);
        
    } else {
    reader.question('Enter a number: ', (answer) => {
        sum += parseInt(answer)
        console.log(sum);
        addNumbers(sum, numsLeft - 1, completionCallback) });
   
    } 

    //console.log("where do i come up?")
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));