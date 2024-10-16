import app from "./app.js";

// Use the PORT environment variable, fallback to 4000 if not set
const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
