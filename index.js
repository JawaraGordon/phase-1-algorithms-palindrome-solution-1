function isPalindrome(string) {
  // Write your algorithm herefunction isPalindrome(string) {
  const reversedWord = reverseString(string);
  return string === reversedWord;
}
function reverseString(string) {
  return string.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  // if (reversedWord === word) {
  //   // console.log(true);
  //   return true;
  // } else {
  //   // console.log(false);
  //   return false;
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
