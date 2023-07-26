import express from "express";
import {see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); 
videoRouter.get("/:id(\\d+)", see); 
videoRouter.get("/:id(\\d+)/edit", edit); 
videoRouter.get("/:id(\\d+)/delete", deleteVideo); 
//이미 /video 안에 들어왔다는 것을 알기 때문에 알아서 +/watch로 인식 ex)/video/Watch로 적을 필요가 없다는 뜻//
// " /: " <- 이렇게 표시하는 이유는 express에 이것이 변수라는 것을 알려주기 위함임// 

export default videoRouter;