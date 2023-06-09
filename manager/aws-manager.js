"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsManager = void 0;
var client_s3_1 = require("@aws-sdk/client-s3");
var REGION = "ap-northeast-2";
exports.AwsManager = new client_s3_1.S3Client({ region: REGION });
