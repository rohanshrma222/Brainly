import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI || '')

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String    
});

export const UserModel = mongoose.model("User", UserSchema);

const TagSchema = new Schema({
  name: String
});

export const TagModel = mongoose.model("Tag", TagSchema);

const ContentSchema = new Schema({
    title: String,
    link: String, 
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }]
})

 const LinkSchema = new Schema({
     hash: String,
     userId: {type: mongoose.Types.ObjectId, ref: "User", required:true,
     unique: true}
 })

  export const LinkModel = mongoose.model("Links", LinkSchema)

  export const ContentModel = mongoose.model("Content", ContentSchema);