import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import { ApiError, BadRequestError, NotFoundError } from "./utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.use((req: Request) => {
    throw new NotFoundError(req.path);
})

app.use(ErrorHandler.handle);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
