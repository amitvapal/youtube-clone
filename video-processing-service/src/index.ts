import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

app.post("/process-video", (req,res) => {
    // get the path of the input video file from the request body
    const inputVideoPath = req.body.inputVideoPath;
    const inputFilePath = req.body.outputFilePath;

    if(!inputFilePath || !inputVideoPath){
        res.status(400).send("Bad Request: Missing file path");
    }

    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale=-1:360") // 360p resolution
        .on("end", () => {
            res.status(200).send("Processing started !");

        })
        .on("error", (err) => {
            console.log(err);
            res.status(500).send("Internal Server Error");
        })
        .save(inputVideoPath);
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Video processing service listening at http://localhost:${port}`);
});  
