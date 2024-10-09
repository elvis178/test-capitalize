# Capitalize Function

This project contains a simple function that capitalizes the first character of a given string and includes basic tests to ensure the function works correctly.

## Description

The `capitalize` function takes a string as input and returns the string with the first letter capitalized. If an empty string is provided, the function returns an empty string.

## Notes

The tests utilize Node.js's `assert` module to verify the functionality of the `capitalize` function.  
If all tests pass successfully, a confirmation message such as **"All tests passed!"** (or in Russian: **"Все тесты пройдены!"**) will be displayed in the console, indicating that the assertions were correct.

### Example usage:

```javascript
import capitalize from './src/capitalize.js';

console.log(capitalize('hello'));      // Output: 'Hello'
console.log(capitalize(''));           // Output: ''
console.log(capitalize('javascript')); // Output: 'Javascript'

