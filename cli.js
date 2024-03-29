#!/usr/bin/env node
//imort package
var program = require('commander'),
    expect = require('expect.js'),
    swg2postman = require('swagger2-to-postman'),
    fs = require('fs'),
    path = require('path');

convert = (input) => {
  fs.readFile(input, 'utf8', function (err, text) {
    var result = new swg2postman().convert(JSON.parse(text));
    console.log(JSON.stringify(result.collection));
  });
}

//main 
program
  .option('-i, --input <input_file>', 'swagger.json')
  .parse(process.argv)
convert(program.input)
