// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value
//  ⁠— return an object with that name and value in it (as key-value pairs).

// Input: An Object, a name, and a value
// Output: The Same Object with the name and value as key-value pairs

const addName = (obj, name, value) => {
    let newObj = {...obj};
    newObj[name] = value;
    return newObj;
}


console.log(addName({}, "Brutus", 300)); // { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400)); // { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // { piano: 500, stereo: 300, Caligula: 440 }