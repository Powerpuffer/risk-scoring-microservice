import { Request, Response } from "express";

export const createTransaction = (req: Request, res: Response) => {
  const { amount, country, userAge } = req.body;

  if (!amount || !country || !userAge) {
    return res.status(400).json({
      message: "Missing required fields"
    });
  }

  const transaction = {
    amount,
    country,
    userAge,
    message: "Transaction received successfully"
  };

  res.status(201).json(transaction);
};