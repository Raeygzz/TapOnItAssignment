import { Router, Request, Response } from "express";
import { StudentQuery } from "../queries";
import { StudentService } from "../services";
import { AuthRequestPayload } from "../models";

const LoginRouter = Router();

LoginRouter.post("/login", async (req: Request, res: Response) => {
  if (!req.body.email && !req.body.password) {
    res.json({
      status: 400,
      message: "Please provide valid inputs",
      data: null,
    });
    return;
  }

  let data = await StudentQuery.loginStudent(req.body);

  if (!data) {
    res.json({ status: 400, message: "Invalid login / password", data: null });
    return;
  }

  if (data.email === req.body.email && data.password === req.body.password) {
    res.json(await StudentService.loginStudent(req.body as AuthRequestPayload));
  } else {
    res.json({ status: 400, message: "Invalid login / password", data: null });
  }
});

export { LoginRouter };
