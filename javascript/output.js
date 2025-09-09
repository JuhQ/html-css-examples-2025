const name = prompt("Give name");
document.querySelector("div.name").innerHTML =
  "Hello " + name + ", " + name + "!";
document.querySelector("div.name").innerHTML = `Hello ${name}, ${name}!`;
// same as python
// print(f"Hello {name}")

console.log("hello " + name);

const string1 = "some string\n\nmultiple lines of text";

const string2 = 'some string, "some content here"';
const string3 = `some string, this is string literal

we can have multiple lines of text
`;
