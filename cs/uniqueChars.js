// a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    // If there is a duplicate of a character, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] === str[j])
                return false;
 
    // If no duplicate characters found, return true
    return true;
}

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

// Function time complexity: O(n^2)