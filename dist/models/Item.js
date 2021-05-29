"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ItemSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true
    },
    item_idx: {
        type: Number,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount_idx: {
        type: Number,
        required: true
    },
    delivery_idx: {
        type: Number,
        required: true
    },
    delivery_today: {
        type: Boolean,
        required: true
    },
});
exports.default = mongoose_1.default.model("Item", ItemSchema);
//# sourceMappingURL=Item.js.map