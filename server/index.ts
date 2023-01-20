import express, { Request, Response } from "express";
const app = express();

// Set up the port
const port = process.env.PORT || 3000;

// Set up the routes
app.get("/", (req: Request, resp: Response) => {
  resp.send("Server running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
