import mongoose from "mongoose";

export interface IStory {
    _id?: string;
    img: string;
    storyIdx: number;
    brand: string;
    view: number;
  }