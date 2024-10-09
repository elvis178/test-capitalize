const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

// Примеры использования:

console.log(capitalize('hello'));
console.log(capitalize(''));
console.log(capitalize('javascript'));

export default capitalize;