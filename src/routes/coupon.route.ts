import { Router, Request, Response } from "express";
import { CouponService } from "../services";

const CouponRouter = Router();

CouponRouter.get("/findAll", async (req: Request, res: Response) => {
  const data = await CouponService.findAllCoupons();
  res.json({ status: 200, message: "Success", data: data });
});

CouponRouter.get("/updateById/:id", async (req: Request, res: Response) => {
  const message = await CouponService.updateCouponById(Number(req.params.id));
  res.json({ status: 200, message: message, data: null });
});

export { CouponRouter };
