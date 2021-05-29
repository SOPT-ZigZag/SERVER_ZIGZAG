import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Banner from "../models/Banner";

router.get("/", async(req: Request, res: Response) => {
        try{
            const randomInt = Math.floor(Math.random()*3);
            const banner = await Banner.findOne({bannerIdx : randomInt});
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "성공",
                "data" : {
                    img: banner.img,
                    bannerIdx: banner.bannerIdx
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