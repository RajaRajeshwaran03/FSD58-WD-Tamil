(function(arr) {
    var uniqueArray = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);
