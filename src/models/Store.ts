import mongoose from "mongoose";
import { IStore } from "../interfaces/IStore";

const StoreSchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    store_idx: {
        type:Number,
        required: true
    },
    brand: {
        type:String,
        required: true
    },
    style: {
        type:String,
        required: true
    },
    coupon: {
        type:Number,
        required: false
    },
    bookmark: {
        type:String,
        required: true
    },
    z_only: {
        type:Boolean,
        required: true
    },
    follower: {
        type:Number,
        required: true
    },
  });
  
  export default mongoose.model<IStore & mongoose.Document>(
    "Store",
    StoreSchema
  );