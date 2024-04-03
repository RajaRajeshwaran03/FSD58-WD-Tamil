var xhr = new XMLHttpRequest();
xhr.open("GET ","./resume.json ",true);
xhr.onload = function() {
    var countries = JSON.parse(xhr.responseText);


};
xhr.send();