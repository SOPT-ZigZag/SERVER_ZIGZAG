import mongoose from "mongoose";

export interface IStore {
    _id?: string;
    img: string;
    brand: string;
    style: string;
    coupon: number;
    bookmark: boolean;
  }