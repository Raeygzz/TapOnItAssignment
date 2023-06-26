import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const tokenVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader === "undefined") {
    res.json({ status: 400, message: "Token is invalid.", data: null });
    return;
  }

  const reqHeaderToken = bearerHeader.split(" ")[1];
  const SecretKey = process.env.SECRET_KEY ?? "";

  jwt.verify(reqHeaderToken, SecretKey, (error, verifiedData) => {
    if (error) {
      res.json({ status: 400, message: "Token is invalid.", data: null });
      return;
    }

    next();
  });
};
