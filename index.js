"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("./entities");
var aws_manager_1 = require("./manager/aws-manager");
var poptizen = new entities_1.Poptizen();
poptizen.name = "name";
console.log('Poptizen =>', poptizen);
console.log('S3 Manager =>', aws_manager_1.AwsManager);
