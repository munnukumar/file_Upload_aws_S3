require("dotenv").config()

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.ACCESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: process.env.REGION,

});
const BUCKET = process.env.BUCKET
s3 = new aws.S3();

exports.upload = multer({

    storage: multerS3({
        
        key: async function (req, file, cb) {
            cb(null, file.originalname)
        },

        s3: s3,
        bucket: BUCKET,
       
    })
})





