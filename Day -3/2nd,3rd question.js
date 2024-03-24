var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onload = function() {
    var countries = JSON.parse(xhr.responseText);
   for (var i = 0; i < countries.length; i++){
    console.log(countries[i].name.common + ": " + countries[i].flag);
    console.log("populations: ",countries[i].population);
    console.log("regions: ",countries[i].regions);
    console.log("sub-regions: ",countries[i].sub-regions);
    
   }
};
xhr.send();