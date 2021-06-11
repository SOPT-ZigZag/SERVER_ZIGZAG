import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Store from "../models/Store";

router.get("/", async(req: Request, res: Response) => {
        try{
            var store =  await Store.find({})
  
            store = store.sort(function() {
                    return Math.random() - Math.random();
                    });
            // const randomInt = Math.floor(Math.random()*3);
            // const store = await Store.findOne({store_idx : randomInt});
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "쇼핑몰 API 불러오기 성공",
                "data" : {
                    "store" : store
                    // img: store.img,
                    // store_idx: store.store_idx,
                    // brand: store.brand,
                    // style: store.style,
                    // coupon: store.coupon,
                    // bookmark: store.bookmark,
                    // z_only: store.z_only,
                    // follower: store.follower,
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