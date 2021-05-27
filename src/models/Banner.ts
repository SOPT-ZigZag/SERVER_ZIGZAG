import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner"

const BannerSchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    bannerIdx: {
        type:Number,
        required: true
    }
});

export default mongoose.model<IBanner & mongoose.Document>("Banner",BannerSchema);