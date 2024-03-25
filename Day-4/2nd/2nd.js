const convertToTitleCaps = (arr) => {
    const titleCapsArray = arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCapsArray);
};

convertToTitleCaps(["hello", "world", "javascript"]);
