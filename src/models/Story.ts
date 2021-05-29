import mongoose from "mongoose";
import { IStory} from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    story_idx: {
        type:Number,
        required: true
    },
    brand: {
        type:String,
        required: false
    },
    view: {
        type:Number,
        required: false
    },
  });
  
  export default mongoose.model<IStory & mongoose.Document>(
    "Story",
    StorySchema
  );