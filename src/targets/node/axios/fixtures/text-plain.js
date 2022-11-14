const axios = require('axios');

const options = {
  method: 'POST',
  url: 'http://mockbin.com/har',
  headers: {'content-type': 'text/plain'},
  data: 'Hello World'
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}