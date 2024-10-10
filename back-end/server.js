import app from "./app.js";

const port = process.env.PORT || 4000;  // Use the PORT environment variable or fallback to 4000

app.listen(port, () => {
  console.log(`Server listening at port ${port}`); // Log the port number
});
