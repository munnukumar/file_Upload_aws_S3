require("dotenv").config()

const express = require('express')

const app = express();

const aws = require('aws-sdk')
const { upload } = require("./middleware");
const { getVideosList } = require("./getVideoList");


//upload videos

app.post('/upload', upload.single('file'), async function (req, res, next) {

    res.send('Successfully uploaded ' + req.file.location + ' location!')

})


//Get list of uploaded videos

app.get('/list', async (req, res) => {
    try {
        const videos = await getVideosList();
        res.status(200).send({ videos });
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch videos list' });
    }
});


app.listen('9000');

console.log("🚀 nodes Server started at port: ");
