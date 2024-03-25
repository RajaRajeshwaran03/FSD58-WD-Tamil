const returnPalindromes = (arr) => {
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    };
    
    const palindromes = arr.filter(str => {
        return isPalindrome(str);
    });
    console.log(palindromes);
};

returnPalindromes(["level", "hello", "noon", "world"]);
