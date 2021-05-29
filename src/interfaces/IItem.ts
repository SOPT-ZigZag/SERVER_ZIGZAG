import mongoose from "mongoose";

export interface IItem{
    _id?: string;
    img: string;
    item_idx: number;
    brand_name: string;
    item_name: string;
    price: number;
    discount_idx: number;
    delivery_idx: number;
    delivery_today: boolean;
}