/* 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

// Solution 1
var isValid = function (s) {
  const obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];

  for (e of s) {
    if (e in obj) {
      if (stack.pop() !== obj[e]) {
        return false;
      }
    } else {
      stack.push(e);
    }
  }

  return stack.length === 0;
};

//Solution 2
var isValid = function (s) {
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (e of s) {
    if (e in obj) {
      stack.push(obj[e]);
    } else if (e !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

//Solution 3
var isValid = function (s) {
  const stack = [];
  for (x of s) {
    switch (x) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (x !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
