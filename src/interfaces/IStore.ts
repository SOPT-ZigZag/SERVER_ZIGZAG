import mongoose from "mongoose";

export interface IStory {
    _id?: string;
    img: string;
    brand: string;
    style: string;
    coupon: string;
    bookmark: boolean;
  }