let sentence = "The quick brown fox jumps over the lazy dog";
let reversedArray = sentence.split('').reverse().join('');

function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase();
    return alphabet.split('').every(letter => str.includes(letter));
}

console.log(isPangram(reversedArray));  // Outputs: true
