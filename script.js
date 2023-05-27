function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = palindrome;
