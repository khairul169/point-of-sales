import express from "express";
import { api } from "./api";

const app = express();

// Handle remult API
app.use(api);

app.listen(3002, () => console.log("Server started"));
