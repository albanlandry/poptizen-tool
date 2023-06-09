import { Poptizen } from "./entities";
import { AwsManager } from "./manager/aws-manager";

const poptizen = new Poptizen();
poptizen.name = "name";

console.log('Poptizen =>', poptizen);
// console.log('S3 Manager =>', AwsManager);