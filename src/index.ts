import bodyParser from "body-parser";
import express, { Application } from "express";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
