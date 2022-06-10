import express from "express";
import { join, login } from "../constrollers/userController";
import { trending, search } from "../constrollers/vidoeController";

const globalRouter = express.Router();


globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;