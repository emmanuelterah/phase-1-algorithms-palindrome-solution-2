function isPalindrome(word) {
  // Write your algorithm here
      // Convert the word to lowercase for case-insensitive comparison
      const lowercaseWord = word.toLowerCase();

      // Initialize pointers
      let leftPointer = 0;
      let rightPointer = lowercaseWord.length - 1;
  
      // Compare characters at pointers while moving towards the center
      while (leftPointer <= rightPointer) {
          if (lowercaseWord[leftPointer] !== lowercaseWord[rightPointer]) {
              // Characters at pointers are not equal, not a palindrome
              return false;
          }
  
          // Move pointers towards the center
          leftPointer++;
          rightPointer--;
      }
  
      // If the loop completes without finding unequal pairs, it's a palindrome
      return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
