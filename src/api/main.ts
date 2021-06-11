/**
 *  @route GET /api/main
 *  @desc 
 *  @access Public
 */
import express, { Request, Response } from "express";
const router = express.Router();

import Banner from "../models/Banner";
import Item from "../models/Item";

/**
 *  @route GET /api/main/banner
 *  @desc get banner images
 *  @access Public
 */
router.get("/banner", async(req: Request, res: Response) => {
        try{
            //const randomInt = Math.floor(Math.random()*3);
            const banner = await Banner.find();
            res.json({
                "status" : 200,
                "success" : true,
                "message" : "배너 API 불러오기 성공",
                "data" : {
                    "banner" : banner
                    // img: banner.img,
                    // banner_idx: banner.banner_idx
                    // }
                    }
                })
            
        } catch(error) {
            console.error(error.message);
            res.status(500).json({
                "status" : 500,
                "success" : false,
                "message" : "서버 오류"
            });
        }
});


/**
 *  @route GET /api/main/item
 *  @desc get item images and info
 *  @access Public
 */
router.get("/item", async(req: Request, res: Response) => {
  try{
      var item =  await Item.find({discount_idx : 1})
  
      item = item.sort(function() {
              return Math.random() - Math.random();
              });

      // const randomInt = Math.floor(Math.random()*15);
      // const item = await Item.findOne({item_idx : randomInt});
      res.json({
          "status" : 200,
          "success" : true,
          "message" : "아이템 API 불러오기 성공",
          "data" : {
              "item" : item
              // img: item.img,
              // item_idx: item.item_idx,
              // brand_name: item.brand_name,
              // item_name: item.item_name,
              // price: item.price,
              // discount_idx: item.discount_idx,
              // delivery_idx: item.delivery_idx,
              // delivery_today: item.delivery_today
              }
          })
      
  } catch(error) {
      console.error(error.message);
      res.status(500).json({
          "status" : 500,
          "success" : false,
          "message" : "서버 에러"
      });
  }
});


module.exports = router;