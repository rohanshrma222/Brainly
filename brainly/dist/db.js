"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.LinkModel = exports.TagModel = exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGO_URI || '');
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: String
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
const TagSchema = new mongoose_1.Schema({
    name: String
});
exports.TagModel = mongoose_1.default.model("Tag", TagSchema);
const ContentSchema = new mongoose_1.Schema({
    title: String,
    link: String,
    type: String,
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: "Tag" }]
});
const LinkSchema = new mongoose_1.Schema({
    hash: String,
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true,
        unique: true }
});
exports.LinkModel = mongoose_1.default.model("Links", LinkSchema);
exports.ContentModel = mongoose_1.default.model("Content", ContentSchema);
