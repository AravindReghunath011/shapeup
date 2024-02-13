import { S3Client} from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
dotenv.config()
export const bucketName = process.env.AWS_BUCKET_NAME as string
export const region = process.env.AWS_REGION as string
export const bucketAccessKey = process.env.AWS_ACCESS_KEY as string
export const bucketSecretAccessKey = process.env.AWS_SECRET_KEY as string
export const s3  = new S3Client({
    credentials:{
        accessKeyId:bucketAccessKey,
        secretAccessKey:bucketSecretAccessKey
    },
    region:region
})