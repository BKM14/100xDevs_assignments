/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Sort = '';
  let str2Sort = '';
  if (str1.length == str2.length) {
    str1Arr = ((str1.toLowerCase()).split('')).sort();
    str2Arr = ((str2.toLowerCase()).split('')).sort();
    for (let i = 0; i < str1Arr.length; i++) {
      str1Sort += str1Arr[i];
      str2Sort += str2Arr[i];
    }
    if (str1Sort == str2Sort) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
   
}


module.exports = isAnagram;
