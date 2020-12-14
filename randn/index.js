const axios = require("axios")

let clo;
let cls;

function roll ()
{ //Send a POST request
axios({
  method: 'post',
  url: 'https://api.random.org/json-rpc/2/invoke',
  data: { "jsonrpc": "2.0", "method": "generateIntegers", "params": { 
"apiKey": 
"3c8e7a7f-ef5c-457b-a841-dcf6085d77c3", "n": 3, "min": 1, "max": 6, "replacement": true }, "id": 42 }
}).then(function (response) {
	clo = response.data.result.random.data;
    console.log(clo);
    console.log(response.data.result);
  });
};

function rolls ()
{
axios({
  method: 'post',
  url: 'https://api.random.org/json-rpc/2/invoke',
  data: { "jsonrpc": "2.0", "method": "generateIntegerSequences", "params": { "apiKey": "3c8e7a7f-ef5c-457b-a841-dcf6085d77c3", "n": 12, "length": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "min": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "max": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], "replacement": [true, true,true,true,true,true,true, true,true,true,true,true], "base": 10 }, "id": 4352 }
}).then(function (response) {
    cls=response.data.result.random.data;
    console.log(cls);
    console.log(response.data.result);
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
};

