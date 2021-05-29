import mongoose from "mongoose";
import { IStory} from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    brand: {
        type:String,
        required: true
    },
    view: {
        type:Number,
        required: true
    },
  });
  
  export default mongoose.model<IStory & mongoose.Document>(
    "Story",
    StorySchema
  );