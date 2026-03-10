import express from "express";
import transactionRoutes from "./routes/transactionRoutes"

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use("/api",transactionRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Risk Scoring Microservice is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});