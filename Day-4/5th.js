(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    
    var palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["level", "hello", "noon", "world"]);
