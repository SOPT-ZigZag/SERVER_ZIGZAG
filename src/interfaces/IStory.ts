import mongoose from "mongoose";

export interface IStory {
    _id?: string;
    img: string;
    story_idx: number;
    brand: string;
    view: number;
  }