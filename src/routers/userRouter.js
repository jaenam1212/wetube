import express from "express";
import { remove, logout, see } from "../constrollers/userController";

const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/edit", remove);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);


export default userRouter;
