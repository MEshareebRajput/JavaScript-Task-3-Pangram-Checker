# JavaScript Task 3: Pangram Checker - Array Reversal 🔄

Welcome to the **JavaScript Task 3: Pangram Checker with Array Reversal** repository! 🎉 This project demonstrates a JavaScript implementation for checking if a string is a pangram and reversing the array of letters to validate its structure.

## Project Overview 📚

This repository contains:
- **HTML** and **CSS** structure for the UI implementation 🌐
- **JavaScript** logic for checking if a given string is a pangram (a sentence containing every letter of the alphabet at least once) 🔍
- A function that reverses the array of letters to showcase a deeper understanding of array manipulation in JavaScript 🤔

## Understanding Pangram and Array Reversal 🔄

A **pangram** is a sentence that contains every letter of the alphabet at least once. Examples include:
- "The quick brown fox jumps over the lazy dog" 🦊🐕
  
In this task, we:
1. Convert the string into an array of characters.
2. Check if each letter of the alphabet is present.
3. Reverse the array for added complexity.

### How Pangram Check Works 🔍

The pangram checker follows these steps:
1. Convert the string to lowercase and remove any non-letter characters.
2. Create a set to keep track of unique letters in the string.
3. Verify if the set contains all 26 letters of the alphabet.

### How Array Reversal Works 🔁

Once the pangram is validated, we:
1. Reverse the array of characters.
2. Display both the original and reversed arrays in the results section.

## JavaScript Implementation 💻

Here’s the core JavaScript function for checking a pangram and reversing the array:

```javascript
function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let input = str.toLowerCase().replace(/[^a-z]/g, '').split('');
    let uniqueLetters = [...new Set(input)];
    
    return alphabet.every(letter => uniqueLetters.includes(letter));
}

function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence)); // true

let reversedArray = reverseArray(sentence.split(''));
console.log(reversedArray); // Reversed array of the sentence characters
```

## Examples 📝

Here's an example demonstrating the pangram checker and array reversal:

```javascript
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence)); // true

let reversedArray = reverseArray(sentence.split(''));
console.log(reversedArray); // Reversed array of the sentence characters
```

## Usage Instructions 🛠️

To run the pangram checker and array reversal:
1. Include the JavaScript file in your HTML structure.
2. Pass any string to the `isPangram()` function to verify if it is a pangram.
3. Reverse the array of characters using the `reverseArray()` function.

## Additional Resources 📚

For more insights into JavaScript arrays and pangrams:
- [MDN Web Docs: JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 📖
- [MDN Web Docs: String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) 📖

## Contact Information 📞

For questions or suggestions about this project:

- **Email**: muhammadeshareeb986@gmail.com 📧
- **LinkedIn**: [Muhammad Eshareeb](https://www.linkedin.com/in/muhammadeshareeb986/) 🦸‍♂️

Happy Coding! 🎉
