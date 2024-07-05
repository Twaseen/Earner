import conversationRoute from "./routes/conversation.route.js";
import dotenv from "dotenv";
import express from "express";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import mongoose from "mongoose";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }
};

app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(8800, () => {
    connect();
    console.log("Backend server is running!")
})