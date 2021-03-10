/*
    Nama : Antares Putra
    Assignment : Exercise 1
*/

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
};

// clear

console.log("\n");

// 2. Using a forEach(),  iterate through this array and console.log all of the people.

people.forEach(function (data) {
    console.log(data);
});

// clear

console.log("\n");

// 3. Write the command to remove "Greg" from the array.

let hasil = people.filter(function (value){
    return value != "Greg";
});

console.log(hasil);

// clear

console.log("\n");

// 4. Write the command to remove "James" from the array.

hasil = hasil.filter(function (value){
    return value != "James";
});

console.log(hasil);

//clear

console.log("\n");

// 5. Write the command to add "Matt" to the front of the array.

hasil.splice(0, 0, "Matt");

console.log(hasil);

//clear

console.log("\n");

// 6. Write the command to add your name to the end of the array.

hasil.splice(hasil.length + 1, 0, "Antares");

console.log(hasil);

//clear

console.log("\n");

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)

for (i = 0; i < hasil.length; i++) {
    console.log(hasil[i]);
    if (hasil[i] === "Mary"){
        break;
    }
};

//clear

console.log("\n");

// 8. Write the command to make a copy of the array using slice. 
// The copy should NOT include "Mary" or "Matt".

hasil = hasil.slice(2);

console.log(hasil);

// clear

console.log("\n");

// 9. Redefine the people variable with the value you started with. 
// Using the splice command, remove "Devon" from the array and add 
// "Elizabeth" and "Artie". Your array should look like this when 
// you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

people.splice(2,1,"Elizabeth","Artie");

console.log(people);

// clear

console.log("\n");

// 10. Create a new variable called withBob and set it equal to 
// the people array concatenated with the string of "Bob".

let withBob = people.concat("Bob");

console.log(withBob);

// clear


/* -----------------------------------------------------------------------------------------------------------------------------------------------*/

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");

console.log(programming);

// clear

console.log("\n");

// 2. By using the bracket notation, change the difficulty to the value of 7.

programming["difficulty"] = 7;

console.log(programming);

// clear

console.log("\n");

// 3. Using the delete keyword, write the command to remove the jokes
// key from the programming object.

delete programming.jokes;

console.log(programming);

// clear

console.log("\n");

// 4. By using the dot notation, write the command to add a new key called 
// isFun and a value of true to the programming object.

programming.isFun = true;

console.log(programming);

// clear

console.log("\n");

// 5. Using a map(), iterate through the languages array and update each 
// element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the 
// index of the array, and console.log the output.

programming.languages = programming.languages.map(function (value, index){
    return index + " - " + value;
});

console.log(programming);

// clear