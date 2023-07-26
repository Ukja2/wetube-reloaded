import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController"

const globalRouter = express.Router();


globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search",search);


export default globalRouter;//외부로 보내기 위해서는 export를 반드시 해야됨//