import mongoose from "mongoose";

export interface IStore {
    _id?: string;
    img: string;
    store_idx: number;
    brand: string;
    style: string;
    coupon: number;
    bookmark: boolean;
    z_only: boolean;
    follower: number;
  }