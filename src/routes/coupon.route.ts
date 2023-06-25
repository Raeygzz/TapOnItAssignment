import { Router, Request, Response } from "express";
import { CouponService } from "../services";
import { CouponRequestPayload } from "../models";

const CouponRouter = Router();

CouponRouter.get("/findAll", async (req: Request, res: Response) => {
  res.json(await CouponService.findAllCoupons());
});

CouponRouter.get("/updateById/:id", async (req: Request, res: Response) => {
  res.json(await CouponService.updateCouponById(Number(req.params.id)));
});

export { CouponRouter };
