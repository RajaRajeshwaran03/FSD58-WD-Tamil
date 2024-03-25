(function(arr) {
    var titleCapsArray = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCapsArray);
})(["hello", "world", "javascript"]);
