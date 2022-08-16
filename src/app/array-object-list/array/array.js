/*
    To learn
        1. What is array?
          - array is a single variable that is used to store different elements.
            It is often used when we want to store list of elements and access them by a single variable.
        2. Create array
        3. Array properties - length
        4. Array characteristics
            4.1 Zero indexed - Manually get value by index
            4.2 Arrays are not associative arrays
                Associative arrays are basically objects in JavaScript where indexes are replaced by user defined keys.
                They do not have a length property like normal array and cannot be traversed using normal for loop.
                Arrays with named indexes are called associative arrays (or hashes).
                JavaScript does not support arrays with named indexes.In JavaScript, arrays always use numbered indexes

                ex.
                const person = [];
                person[0] = "John";
                person[1] = "Doe";
                person[2] = 46;
                person.length;
                person[0];

                ex.
                const person = [];
                person["firstName"] = "John";
                person["lastName"] = "Doe";
                person["age"] = 46;
                person.length;
                person[0];

            4.3 Mix of different data types
            4.4 Resizable
            4.5 Shallow copies and deep copies
        5. Array methods
            5.1 concat()
            5.2 includes()
            5.3 indexOf()
            5.4 slice()
            5.5 filter()
            5.6 find()
        6. Array to string conversion and vice-versa
        7. Looping
            7.1 for()
            7.2 map()
            7.3 forEach()

    Self learning
        1. Difference between map, for, forEach
        2. Matrix creation

    Reference
        1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// EXAMPLES
// 1. Create array
    // 1.1 With constructor
    const array1 = new Array('eat', 'sleep', 'work');
    console.log('constructor array: ', array1);
// 1.2 Direct
    const array2 = ['eat', 'sleep', 'work'];
    console.log('Direct array: ', array2);

// 2. Check array length
console.log('array length', array2.length);

// 3. Zero indexed
console.log('First element', array2[0]);
console.log('Second element', array2[1]);
console.log(array2.indexOf('work'));

// 4. Mix of different data types
const validArray = ['Apple', 4, 1.5, {}];

// 5. Resizable array
const sampleArray = ['Strawberry', 'Banana', 'Mango', 'Apple', 'Lichi', 'Cherry'];
console.log('Original array length: ', sampleArray.length);

// 5.1 pop() - Removes last element
    const removedItem = sampleArray.pop();
    console.log('Removed item: ', removedItem);
    console.log('Updated array: ', sampleArray);
    console.log('Updated array length: ', sampleArray.length);

// 5.2 splice() - Adds and/or removes elements from an array !important
    // Remove - Please do not use delete method as it creates empty/undefined element in between
    const removedItems = sampleArray.splice(2, 1);
    console.log('Removed item: ', removedItems);
    console.log('Updated array: ', sampleArray);
    console.log('Updated array length: ', sampleArray.length);

    // Add
    sampleArray.splice(2, 0, 'Sitafal');
    console.log('Updated array: ', sampleArray);
    console.log('Updated array length: ', sampleArray.length);
    // sampleArray.splice(2, 0, ['Sitafal']);

// 5.3 push() - Add new items at the end of array
    sampleArray.push('Ramfal');
    console.log('Updated array: ', sampleArray);
    sampleArray.push(["Kiwi", "Lemon"]);
    console.log('Updated array: ', sampleArray);

// 6. Array methods
// 6.1 concat()
        const c1 = ['a', 'b', 'c'];
        const c2 = ['d', 'e', 'f'];
        const array3 = c1.concat(c2);

        console.log(array3);
// 6.2 includes()
        const a1 = [1, 2, 3];
        console.log(a1.includes(2));
        // expected output: true
        const pets = ['cat', 'dog', 'bat'];
        console.log(pets.includes('cat'));
        // expected output: true
        console.log(pets.includes('at'));
        // expected output: false
// 6.3 indexOf()
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
        console.log(beasts.indexOf('bison'));
        // expected output: 1
        // start from index 2
        console.log(beasts.indexOf('bison', 2));
        // expected output: 4
        console.log(beasts.indexOf('giraffe'));
        // expected output: -1
// 6.4 slice() - Extracts a section of the calling array and returns a new array
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

        console.log(animals.slice(2));
        // expected output: Array ["camel", "duck", "elephant"]

        console.log(animals.slice(2, 4));
        // expected output: Array ["camel", "duck"]

        console.log(animals.slice(1, 5));
        // expected output: Array ["bison", "camel", "duck", "elephant"]

        console.log(animals.slice(-2));
        // expected output: Array ["duck", "elephant"]

        console.log(animals.slice(2, -1));
        // expected output: Array ["camel", "duck"]

        console.log(animals.slice());
        // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// 6.5 filter() - Returns a new array containing all elements of the calling array for which the provided filtering function returns true
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// 6.6 find() - Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found
const s2 = [5, 12, 8, 130, 44];

const found = s2.find(element => element > 10);

console.log(found);
// expected output: 12
// 6.7 foreach() -
const s1 = ['a', 'b', 'c'];

s1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
// 7. Array conversion
const helloWorld = ['Hello', 'world!', 'Good', 'afternoon'];
// 7.1 Array to string
    console.log(helloWorld.toString());
    console.log(helloWorld.join(' and '));

// 7.2 String to array
    const sampleString = 'Hi there! How are you';
    console.log(sampleString.split(' '));

   // -------------------------JavaScript Date Objects---------------------------------------//

   // There are 4 ways to create a new date object:
   // new Date()
    const d = new Date();
   // new Date(year, month, day, hours, minutes, seconds, milliseconds)
   const c = new Date(2018, 11, 24, 10, 33, 30, 0);
   // new Date(milliseconds)
    const a= new Date(0)
   // new Date(date string)
   const m = new Date("October 13, 2014 11:13:00");


