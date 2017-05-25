const palindrome = (str) => {
    const removeChar = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    const checkPalindrome = removeChar.split('').reverse().join('');

    if(removeChar === checkPalindrome) return true;
    return false;
}

module.exports = palindrome;