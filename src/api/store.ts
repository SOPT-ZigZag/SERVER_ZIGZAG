import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Store from "../models/Store";

router.get("/", async(req: Request, res: Response) => {
        try{
            const randomInt = Math.floor(Math.random()*3);
            const store = await Store.findOne({store_idx : randomInt});
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "성공",
                "data" : {
                    img: store.img,
                    store_idx: store.store_idx,
                    brand: store.brand,
                    style: store.style,
                    coupon: store.coupon,
                    bookmark: store.bookmark,
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