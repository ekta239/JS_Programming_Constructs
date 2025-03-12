// Function to check if a number is a palindrome
function isPalindrome(num) {
    let original = num.toString();  // Convert number to string
    let reversed = original.split("").reverse().join(""); // Reverse the string
    return original === reversed;
}

// Function to check if two numbers are palindromes
function checkTwoPalindromes(num1, num2) {
    console.log(`Checking if ${num1} and ${num2} are palindromes...`);

    let result1 = isPalindrome(num1) ? `${num1} is a palindrome.` : `${num1} is NOT a palindrome.`;
    let result2 = isPalindrome(num2) ? `${num2} is a palindrome.` : `${num2} is NOT a palindrome.`;

    console.log(result1);
    console.log(result2);
}

// Example usage
checkTwoPalindromes(121, 1331); // Both are palindromes
checkTwoPalindromes(123, 456); // Neither is a palindrome
checkTwoPalindromes(101, 202); // Both are palindromes
