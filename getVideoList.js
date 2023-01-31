require("dotenv").config()

const aws = require('aws-sdk')

const BUCKET = process.env.BUCKET
s3 = new aws.S3();

exports.getVideosList = async () => {
    const params = {
        Bucket: BUCKET,
    };
    const { Contents } = await s3.listObjects(params).promise();
    return Contents.map((content) => ({
        key: content.Key,
        url: s3.getSignedUrl('getObject', {
            Bucket: BUCKET,
            Key: content.Key,
        }),
    }));
}
