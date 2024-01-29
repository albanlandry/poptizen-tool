"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("./entities");
var poptizen = new entities_1.Poptizen();
poptizen.name = "name";
// Reads the file
// Converts the payload to json
// Loop through the json array and
// for each element, find the corresponding image and upload it in aws
// then save the record in database
// console.log('S3 Manager =>', AwsManager);
// console.log('Mongoose', AppDataSource);
