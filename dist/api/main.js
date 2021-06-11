"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  @route GET /api/main
 *  @desc
 *  @access Public
 */
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Banner_1 = __importDefault(require("../models/Banner"));
const Item_1 = __importDefault(require("../models/Item"));
/**
 *  @route GET /api/main/banner
 *  @desc get banner images
 *  @access Public
 */
router.get("/banner", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const randomInt = Math.floor(Math.random()*3);
        const banner = yield Banner_1.default.find();
        res.json({
            "status": 200,
            "success": true,
            "message": "배너 API 불러오기 성공",
            "data": {
                "banner": banner
                // img: banner.img,
                // banner_idx: banner.banner_idx
                // }
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            "status": 500,
            "success": false,
            "message": "서버 오류"
        });
    }
}));
/**
 *  @route GET /api/main/item
 *  @desc get item images and info
 *  @access Public
 */
router.get("/item", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var item = yield Item_1.default.find({ discount_idx: 1 });
        item = item.sort(function () {
            return Math.random() - Math.random();
        });
        // const randomInt = Math.floor(Math.random()*15);
        // const item = await Item.findOne({item_idx : randomInt});
        res.json({
            "status": 200,
            "success": true,
            "message": "아이템 API 불러오기 성공",
            "data": {
                "item": item
                // img: item.img,
                // item_idx: item.item_idx,
                // brand_name: item.brand_name,
                // item_name: item.item_name,
                // price: item.price,
                // discount_idx: item.discount_idx,
                // delivery_idx: item.delivery_idx,
                // delivery_today: item.delivery_today
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            "status": 500,
            "success": false,
            "message": "서버 에러"
        });
    }
}));
module.exports = router;
//# sourceMappingURL=main.js.map