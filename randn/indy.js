const axios = require("axios")

function roll ()
{ //Send a POST request
axios({
  method: 'post',
  url: 'https://api.random.org/json-rpc/2/invoke',
  data: { "jsonrpc": "2.0", "method": "generateIntegers", "params": { 
"apiKey": 
"3c8e7a7f-ef5c-457b-a841-dcf6085d77c3", "n": 3, "min": 1, "max": 6, "replacement": true }, "id": 42 }
}).then(function (response) {
    console.log(response.data.result.random.data);
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
    console.log(response.data.result.random.data);
    console.log(response.data.result.random);
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
};

function rolls2 ()
{
axios({
  method: 'post',
  url: 'https://api.random.org/json-rpc/2/invoke',
  data:{ "jsonrpc": "2.0", "method": "generateIntegerSequences", "params": { "apiKey": "3c8e7a7f-ef5c-457b-a841-dcf6085d77c3", "n": 48, "length": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "min": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "max": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], "replacement": [true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true,true, true,true,true,true,true], "base": 10 }, "id": 4357 }
}).then(function (response) {
    console.log(response.data.result.random.data);
    console.log(response.data.result.random);
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
};
