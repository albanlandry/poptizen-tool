import { Poptizen } from "./entities";
import { AwsManager } from "./manager/aws-manager";
import * as fs from 'fs/promises';
import { AppDataSource } from "./connection/connections";

const poptizen = new Poptizen();
poptizen.name = "name";

// Reads the file
// Converts the payload to json

// Loop through the json array and
// for each element, find the corresponding image and upload it in aws
// then save the record in database

// console.log('S3 Manager =>', AwsManager);
// console.log('Mongoose', AppDataSource);