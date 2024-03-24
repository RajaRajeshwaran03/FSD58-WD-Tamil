 var obj1 = {name="person1",age=5};
 var obj2 = { age=5,name="person1 "};

 function areObjectEqual(obj1,obj2){
    var keys1 = Object.keys(obj1);
    var keys1 = Object.keys(obj2);

    if (keys1.length !== keys2.length){
        return false;
    }
    for(var i = 0;i < keys1.length; i++){
        if(obj1[keys1[i]] !== obj2[keys2[i]]){
            return false;
        }
    }
    return true;
}
console.log(areObjectEqual(obj1,obj2));  