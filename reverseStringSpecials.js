// Reverse the string without affecting special characters and numbers.

// revSpecstring("AFC#47GH$Ieu") ➞ "ueI#47HG$CFA"
// revSpecstring("guyhiuj1234!@#$%rtyhghu") ➞ "uhghytr1234!@#$%juihyug"
// revSpecstring("12!@") ➞ "12!@"


// Input: a string containing letters, numbers, and special chars
// Output: the same string with only the letters reversed

// Constraints: Use For loops


// Pseudocode



const revSpecstring = (special) => {

    // Spread and split the string into an array
    let stringArray = special.split('');

    // declare a special chars array containing all special characters
    let specialChars = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','|',':',';','"',"'",'<','>','?','/','.',',','`', '~'];
    // declare a letters array for holding the letters in the string
    let lettersArray = [];
    let specialsArray = [];
    // Iterate through the specialString and check if each index is a special char or number. 
    for (let i = 0; i < stringArray.length; i++) {
        let current = stringArray[i];
        //  --- If it is, add the char to a specialChars array AND splice the current array index with a 'addSpecial'
        if (Number.parseInt(current) || specialChars.includes(current)) {
            specialsArray.push(current);
            stringArray.splice(i, 1, 'addSpecial');
        } 
        //  --- If it isn't, add the char to a the letters array AND splice the current array with a 'addChar'
        else {
            lettersArray.push(current);
            stringArray.splice(i, 1, 'addChar');
        }
    }

    lettersArray = lettersArray.reverse();
    // reverse the order of the letters array

    // Iterate through the specialString array. 

    let letterCount = 0;
    let specialCount = 0;
    for (let j = 0; j < stringArray.length; j++) {
        let currentIndex = stringArray[j];
        if (currentIndex === 'addChar') {
            // --- Replacing the 'addChar' with the reversedChar index -- keeping track of the index
            stringArray.splice(j, 1, lettersArray[letterCount]);
            letterCount++;
            
        } else {
            // --- Replacing the 'addSpecial' with the appropriate index -- keeping track of the index 
            stringArray.splice(j, 1, specialsArray[specialCount]);
            specialCount++;
        }
    }

    // Join the array together and return
    return stringArray.join('');


}



console.log(revSpecstring("AFC#47GH$Ieu")); //  ➞ "ueI#47HG$CFA"
console.log(revSpecstring("guyhiuj1234!@#$%rtyhghu")); //  ➞ "uhghytr1234!@#$%juihyug"
console.log(revSpecstring("12!@")); // revSpecstring("12!@") ➞ "12!@"



