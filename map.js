const fruits = new Map([
    ['Apples', 500],
    ['Bananas', 300],
    ['Oranges', 200]
])

// set() - to add elements or change existing Map values.
fruits.set("Kiwi", 200);
fruits.set("Apples", 600);
console.log(fruits); // Map(4) {'Apples' => 600, 'Bananas' => 300, 'Oranges' => 200, 'Kiwi' => 200}

// get() - gets the value of a key in a Map
console.log(fruits.get("Apples")); // 600

// size() - returns the number of elements in a Map
console.log(fruits.size); // 4

// delete() - removes a Map element
fruits.delete("Apples");
console.log(fruits); // Map(3) {'Bananas' => 300, 'Oranges' => 200, 'Kiwi' => 200}

// has() - returns true if a key exists in a Map
console.log(fruits.has("Apples")); // dalse

// typeof - returns object
console.log(typeof fruits); // object

// instanceof Map returns true
console.log(fruits instanceof Map); // true

// clear() - removes all the elements from a Map
fruits.clear(); 

console.log(fruits); // Map(0) {size: 0}