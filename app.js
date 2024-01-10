import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/suggestion.js";
import eventRouter from "./routes/upcomingEvents.js";
import pastRouter from "./routes/pastComp.js";
import contestRouter from "./routes/contest.js";
import pastEventsRouter from "./routes/pastEvents.js";
import blogRouter from "./routes/blog.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import dotenv from "dotenv"


config({
  path: "./data/config.env",
});
export const app = express();

dotenv.config();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));

// Using routes
app.use("/api/v1/users", userRouter);
//for suggestion part for all
app.use("/api/v1/task", taskRouter);
//for upcoming events
app.use("/api/v1/event", eventRouter);
//for past competition
app.use("/api/v1/pastComp" , pastRouter);
//for contest
app.use("/api/v1/contest",contestRouter)
//for pastEvents
app.use("/api/v1/pastEvents",pastEventsRouter)
//for blog section
app.use("/api/v1/blog", blogRouter);


app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
