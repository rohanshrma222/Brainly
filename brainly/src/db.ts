import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI || '')

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String    
});

// Correct way to create a model using mongoose.model
export const UserModel = mongoose.model("User", UserSchema);

const TagSchema = new Schema({
  name: String
});

export const TagModel = mongoose.model("Tag", TagSchema);

const ContentSchema = new Schema({
    title: String,
    link: String, 
    type: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }]
})

export const ContentModel = mongoose.model("Content", ContentSchema);