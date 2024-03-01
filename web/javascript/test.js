class Test {
  constructor() {
    this.s = "string";
  }

  compressString(input) {
    let output = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        // Check if the current character is the same as the next character
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            output += input[i] + (count > 1 ? count : '');
            count = 1; }} // reset count
    return output;}

  countDuplicates(string) {
    // Initialize an empty object to store character counts
    const counts = {};
    // Iterate over each character in the given string
    for (const char of string) {  // Fix: changed 'this.s' to 'string'
        // If the character is already in 'counts', increment its count,
        // otherwise, initialize it to 1
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    // Iterate over the keys (characters) in 'counts'
    for (const char in counts) {
        // If a character's count is less than 2, delete it from 'counts'
        if (counts[char] < 2) {
            delete counts[char]; } }
    return counts;
}
function sortDigitsDescending(number) {
  let numStr = String(number);
  let digits = numStr.split('');
  // Step 3: Sort the array in descending order
  let sortedDigits = digits.sort((a, b) => b - a);
  let sortedStr = sortedDigits.join('');
  // Step 5: Convert the string back to a number
  let sortedNumber = parseInt(sortedStr);
  return sortedNumber;
}
function getAlphabetPosition(letter) {
  const charCode = letter.toLowerCase().charCodeAt(0);
  return charCode - 96;
}
function getLetterFromAlphabetPosition(position) {
  const charCode = position + 96;
  return String.fromCharCode(charCode);
}
const numbers = [10, 20, 23, 5, 40, 54, 80];
const numbersCopy = [...numbers];
// Sorting in ascending order
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
const minValue = Math.min(...numbers);
let stringNumbers = ["1", "2", "3", "4", "5"];
let intNumbers = stringNumbers.map(num => parseInt(num));
// loop dict
for (let [key, value] of Object.entries(obj)) 
substrings.some(substring => str.includes(substring));
let str = "Hello, this is a test string.";
let substrings = ["test", "example", "sample"];
str.toLowerCase();
if (typeof variable === 'string') {
  return 'string';}
  (typeof variable === 'number' && Number.isInteger(variable)) {
    return 'integer';
  // Challenge #2 - Finding the first non-repeated character
  firstNonRepeatedChar(string) {
    const charCount = {};
    for (const char of string) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    // for (const char of string) {
    //   if (charCount[char]) {
    //     charCount[char] += 1;
    //   } else {
    //     charCount[char] = 1;
    //   }
    // }
    for (const char of string) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  // Challenge #3 - Reversing letters and words
  reverseLettersAndWords(string) {
    return this.s.split("").reverse().join("");
  }
//   reverseLettersAndWords(string) {
//     let reversed = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversed += string[i];
//     }
//     return reversed;
// }
  // Challenge #4 - Generating all permutations
  generatePermutations(str, prefix = "") {
    // Get the length of the string
    var n = str.length;
    // Base case: if the string is empty, print the current permutation
    if (n == 0) {
        console.log(prefix);
    } else {
        // Recursive case: iterate over each character in the string
        for (let i = 0; i < n; i++) {
            // Call the function recursively, building up the prefix
            // and removing the current character (at index i) from the string
            // str.substring(0, i) takes the substring before the character at index i
            // str.substring(i + 1, n) takes the substring after the character at index i
            // prefix + str.charAt(i) adds the current character to the prefix
            this.generatePermutations(
                str.substring(0, i) + str.substring(i + 1, n),
                prefix + str.charAt(i) );
        }
    }
}
  // Challenge #5 - Checking whether a string is a palindrome
  isPalindrome() {
    const reversed = this.s.split("").reverse().join("");
    return this.s === reversed;
    // for (let i = 0; i < str.length/2; i ++ ){
    //     if (str.charAt(i) != str.charAt(str.length - i - 1)) {
    //         return false
    //     }
    // }
    // return true
  }
  // Challenge #6 - Sorting an array of strings by length
  sortByLength(arr) {
    // return arr.sort((a, b) => a.length - b.length);
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1].length > arr[i].length) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
          swapped = true;
        }
      }
    }
    return arr;
  }
}

const test = new Test();

console.log(test.sortByLength(["You", "are", "beautiful", "looking"]));
console.log(test.compressString("fffeeediiiwww"));
console.log(test.countDuplicates("fffeeediiiwww"));
console.log(test.firstNonRepeatedChar("fffeeediiiwww"));

const testFunc = function(str){
    console.log(str)
}
console.log(testFunc('hello'))
