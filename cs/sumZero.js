// a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// Jaxon's solution

function sumZero(arr) {

    if (arr.length === 0 || arr.length === 1) {
        return 'false';
    }

    for (let i = 0; i < arr.length - 1; i++) {
        // Start at i+1 to prevent from comparing first item with itself
        for (let j = i + 1; j < arr.length;j++) {
            if (arr[i] + arr[j] === 0) {
                return 'true';
            }
        }
    }

    return 'false';
}
