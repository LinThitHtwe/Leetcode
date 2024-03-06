// https://leetcode.com/problems/valid-parentheses/description/

//------------------------------

// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//---------------------

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//-----------------------

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//--------------------------------

// Solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

//----------------------------------

//Explanation

// First create a stack of array
// And then loop through each character in a string
// if a character is one of ( { or [ , push that character into a stack

//  If not, check  if the stack is empty or if current character is the closing parenthese of
// the characher before it.
// Because if stack is empty, that mean there is no starting parentheses in the stack
//  And if it's not the closeing tag of the character before him, return false

// Otherwise, pop the opening bracket from the stack

// After the loop,
// If the stack is empty,
// all opening brackets have been matched with their corresponding closing brackets,
// so the string is valid, otherwise, there are unmatched opening brackets, so return false
