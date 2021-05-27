import mongoose from "mongoose";

export interface IBanner{
    _id?: string;
    img: string;
    bannerIdx: number;
}