"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StoreSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true
    },
    store_idx: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    coupon: {
        type: Number,
        required: false
    },
    bookmark: {
        type: String,
        required: true
    },
    z_only: {
        type: Boolean,
        required: true
    },
    follower: {
        type: Number,
        required: true
    },
});
exports.default = mongoose_1.default.model("Store", StoreSchema);
//# sourceMappingURL=Store.js.map