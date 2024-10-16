import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Enable CORS with specific configuration
app.use(
    cors({
        origin: [process.env.FRONTEND_URL], // Allow requests from the frontend URL
        methods: ["POST"], // Allow POST requests only
        credentials: true, // Allow credentials (cookies, headers, etc.)
    })
);

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the root route to handle GET requests to "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Event Planning API!'); // Response for root URL
});

// Use the message router for "/api/v1/message" routes
app.use("/api/v1/message", messageRouter);

// Connect to the database
dbConnection();

// Export the app for use in server.js or elsewhere
export default app;
