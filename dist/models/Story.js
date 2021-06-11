"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StorySchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true
    },
    story_idx: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    view: {
        type: Number,
        required: false
    },
});
exports.default = mongoose_1.default.model("Story", StorySchema);
//# sourceMappingURL=Story.js.map