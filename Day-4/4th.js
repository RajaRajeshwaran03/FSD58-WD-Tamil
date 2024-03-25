(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    var primeNumbers = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
