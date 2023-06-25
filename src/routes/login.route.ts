import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { StudentQuery } from "../queries";

const LoginRouter = Router();
const SecretKey = process.env.SECRET_KEY ?? "";

LoginRouter.post("/login", async (req: Request, res: Response) => {
  let data = await StudentQuery.loginStudent(req.body);

  if (!data) {
    res.json({ status: 400, message: "Invalid login / password", data: null });
    return;
  }

  if (data.email === req.body.email && data.password === req.body.password) {
    jwt.sign({ data }, SecretKey, { expiresIn: "2100s" }, (error, token) => {
      if (error) {
        res.json({ status: 400, message: error, data: null });
        return;
      }

      res.json({
        id: data?.id,
        accssToken: token,
        email: data?.email,
        firstName: data?.firstName,
        lastName: data?.lastName,
        city: data?.city,
        state: data?.state,
        zip: data?.zip,
        sent: data?.sent,
      });
    });
  } else {
    res.json({ status: 400, message: "Invalid login / password", data: null });
  }
});

export { LoginRouter };
