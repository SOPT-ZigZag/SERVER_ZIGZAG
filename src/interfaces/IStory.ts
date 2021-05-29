import mongoose from "mongoose";

export interface IStory {
    _id?: string;
    img: string;
    brand: string;
    view: number;
  }