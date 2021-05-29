import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Story from "../models/Story";

router.get("/", async(req: Request, res: Response) => {
        try{
            const randomInt = Math.floor(Math.random()*2);
            const story = await Story.findOne({storyIdx : randomInt});
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "성공",
                "data" : {
                    img: story.img,
                    storyIdx: story.storyIdx,
                    brand: story.brand,
                    view: story.view,
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