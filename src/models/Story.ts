import mongoose from "mongoose";
import { IStory} from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
    img: {
    },
  });
  
  export default mongoose.model<IStory & mongoose.Document>(
    "Story",
    StorySchema
  );