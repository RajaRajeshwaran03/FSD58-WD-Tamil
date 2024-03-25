(function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    var median = length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
    console.log(median);
})([1, 2, 3], [4, 5, 6]);
