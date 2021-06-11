import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Story from "../models/Story";

router.get("/", async(req: Request, res: Response) => {
        try{
            const story = await Story.find();
  
            story = story.sort(function() {
                    return Math.random() - Math.random();
                    });
            // const randomInt = Math.floor(Math.random()*3);
            // const story = await Story.findOne({story_idx : randomInt});
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "스토어 API 불러오기 성공",
                "data" : {
                    "story" : story
                    // img: story.img,
                    // story_idx: story.story_idx,
                    // brand: story.brand,
                    // view: story.view,
                    }
                })
            
        } catch(error) {
            console.error(error.message);
            res.status(500).json({
                "status" : 500,
                "success" : false,
                "message" : "Server Error"
            });
        }
});

module.exports = router;