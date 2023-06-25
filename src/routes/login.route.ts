import { Router, Request, Response } from "express";
import { StudentService } from "../services";
import { AuthRequestPayload } from "../models";

const LoginRouter = Router();

LoginRouter.post("/login", async (req: Request, res: Response) => {
  res.json(await StudentService.loginStudent(req.body as AuthRequestPayload));
});

export { LoginRouter };
