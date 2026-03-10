import { Request, Response } from "express";
import { calculateRiskScore } from "../services/riskService";

export const createTransaction = (req: Request, res: Response) => {
  const { amount, country, userAge } = req.body;

  if (!amount || !country || !userAge) {
    return res.status(400).json({
      message: "Missing required fields"
    });
  }

  const riskScore = calculateRiskScore(amount, country, userAge)

  const transaction = {
    amount,
    country,
    userAge,
    riskScore
    //message: "Transaction received successfully"
  };

  res.status(201).json(transaction);
};