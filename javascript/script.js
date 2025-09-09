console.log("Hello from script.js");

// alert("Hello");

/*
this is multiline comment

what ever comments here

javascript does not execute comments
*/

let noContent = 1;

// and comparison operator: &&
if (noContent === "1" && 1 === 1) {
  console.log("No content variable matches the if statement");
}

// or comparison operator: ||
if (1 === 1 || 2 === 2) {
  // .....
}

let globalVariable = "global variable";

let number = 123;
console.log(number);

number = "horse";
console.log(number);

function createLocal() {
  let localVariable = "local variable";
  console.log(globalVariable);

  alert(localVariable);
}
