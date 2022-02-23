import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: String,
});
