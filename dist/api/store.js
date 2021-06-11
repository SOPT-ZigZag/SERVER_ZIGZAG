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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Store_1 = __importDefault(require("../models/Store"));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var store = yield Store_1.default.find({});
        store = store.sort(function () {
            return Math.random() - Math.random();
        });
        // const randomInt = Math.floor(Math.random()*3);
        // const store = await Store.findOne({store_idx : randomInt});
        res.json({
            "status": 200,
            "success": true,
            "message": "쇼핑몰 API 불러오기 성공",
            "data": {
                "store": store
                // img: store.img,
                // store_idx: store.store_idx,
                // brand: store.brand,
                // style: store.style,
                // coupon: store.coupon,
                // bookmark: store.bookmark,
                // z_only: store.z_only,
                // follower: store.follower,
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            "status": 500,
            "success": false,
            "message": "Server Error"
        });
    }
}));
module.exports = router;
//# sourceMappingURL=store.js.map