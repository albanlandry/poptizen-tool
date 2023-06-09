
import { S3Client } from "@aws-sdk/client-s3";

const REGION = "ap-northeast-2";

export const AwsManager = new S3Client({ region: REGION });