import mongoose from "mongoose";
import { IItem } from "../interfaces/IItem"

const ItemSchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    item_idx: {
        type:Number,
        required: true
    },
    brand_name: {
        type:String,
        required: true
    },
    item_name: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    discount_idx: {
        type:Number,
        required: true
    },
    delivery_idx: {
        type:Number,
        required: true
    },
    delivery_today: {
        type:Boolean,
        required: true
    },
});

export default mongoose.model<IItem & mongoose.Document>("Item",ItemSchema);