"use strict";
var url = 'http://mockbin.com/har';
var form = new FormData();
form.append('foo', 'bar');
var options = { method: 'POST' };
options.body = form;
try {
    var response = await fetch(url, options);
    var data_1 = await response.json();
    console.log(data_1);
}
catch (error) {
    console.error(error);
}
