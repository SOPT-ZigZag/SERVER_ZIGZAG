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
const Story_1 = __importDefault(require("../models/Story"));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var story = yield Story_1.default.find({});
        story = story.sort(function () {
            return Math.random() - Math.random();
        });
        // const randomInt = Math.floor(Math.random()*3);
        // const story = await Story.findOne({story_idx : randomInt});
        res.json({
            "status": 200,
            "success": true,
            "message": "스토어 API 불러오기 성공",
            "data": {
                "story": story
                // img: story.img,
                // story_idx: story.story_idx,
                // brand: story.brand,
                // view: story.view,
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
//# sourceMappingURL=story.js.map