import { Router, Request, Response } from "express";

const NotFoundRouter = Router();

NotFoundRouter.get("/**", async (req: Request, res: Response) => {
  res.json({ message: "<h1>404 Not Found</h1>" });
});

export { NotFoundRouter };
