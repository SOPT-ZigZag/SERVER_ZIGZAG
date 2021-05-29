"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BannerSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true
    },
    banner_idx: {
        type: Number,
        required: true
    }
});
exports.default = mongoose_1.default.model("Banner", BannerSchema);
//# sourceMappingURL=Banner.js.map