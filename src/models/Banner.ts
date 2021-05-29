import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner"

const BannerSchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    banner_idx: {
        type:Number,
        required: true
    }
});

export default mongoose.model<IBanner & mongoose.Document>("Banner",BannerSchema);