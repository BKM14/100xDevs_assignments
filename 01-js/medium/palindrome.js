/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >=0 ; i--) {
//     revStr += str[i];
//   }
//   if (((str.toLowerCase())) == (revStr.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(str) {
  let strArray = str.split('');
  let punctuationMarks = '.,\/#!$%\^&\*;?:{}=\-_`~() ';
  let punctuationArray = punctuationMarks.split('');
  let strNoSpace = '';

  for (let i = 0; i < strArray.length; i++) {
    if(punctuationArray.includes(strArray[i])) {
      continue;
    } else {
      strNoSpace += strArray[i];
    }
  }

  let revStr = '';
  
  for (i = strNoSpace.length - 1; i >= 0; i--) {
    revStr += strNoSpace[i];
  }

  if (revStr.toLowerCase() == strNoSpace.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;

// race car