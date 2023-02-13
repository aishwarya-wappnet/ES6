// length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// There are three methods for extracting parts of a string:

// slice()
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
console.log(part); // Banama
let part1 = text1.slice(-12, -6);
console.log(part1); // Banana
let part6 = text1.slice(-12);
console.log(part6); // Banana, Kiwi

// substring
let part3 = text1.substring(7, 13);
console.log(part3); // Banana
let part7 = text1.substring(-12);
console.log(part7); // Apple, Banana, Kiwi

// substr
let part4 = text1.substr(7, 6);
console.log(part4); // Banana
let part5 = text1.substr(-4);
console.log(part5); // Kiwi

// replace(): This method does not change the string it it called on. It returns a new string.
// By default replace() method replaces only the first match
let text2 = "Please visit Microsoft and Microsoft";
let newText = text2.replace("Microsoft", "Amazon"); // Please visit Amazon and Microsoft
let newText1 = text2.replace(/MICROSOFT/i, "Amazon"); // Please visit Amazon and Microsoft
console.log(newText1);

// replaceAll()
let text3= "I love cats. Cats are very easy to love. Cats are very popular."
text3 = text3.replaceAll(/[cC]ats/g, "Dogs"); 
console.log(text3); // I love Dogs. Dogs are very easy to love. Dogs are very popular.

// toUpperCase() and toLowerCase()
console.log(text.toUpperCase()); // ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(text.toLowerCase()); // abcdefghijklmnopqrstuvwxyz

// concat()
console.log(text.concat(" ", ":Uppercase Aplhabets")) // ABCDEFGHIJKLMNOPQRSTUVWXYZ :Uppercase Aplhabets

// trim()
let text4 = "   \"Hello World  \"        ";
console.log(text4.trim()); //"Hello World  "

// trimStart()
console.log(text4.trimStart());  //"Hello World  "

// trimEnd()
console.log(text4.trimEnd()); //   "Hello World  "

// charAt()
console.log(text4.charAt(8)); // o

// charCodeAt()
console.log(text4.charCodeAt(8)); // 111

// split()
console.log(text1.split(",")); // ["Apple", "Banana", "Kiwi"];