"use strict";
var url = 'http://mockbin.com/har';
var options = { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' } };
try {
    var response = await fetch(url, options);
    var data_1 = await response.json();
    console.log(data_1);
}
catch (error) {
    console.error(error);
}
