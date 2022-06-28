import express from "express";
import { join, login } from "../constrollers/userController";
import { search, home } from "../constrollers/vidoeController";

const globalRouter = express.Router();


globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/join", join);




export default globalRouter;