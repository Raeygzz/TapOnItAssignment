import { Router } from "express";
import { LoginRouter } from "./login.route";
import { CouponRouter } from "./coupon.route";
import { StudentRouter } from "./student.route";
import { NotFoundRouter } from "./notFound.route";

const RootRoute = Router();

RootRoute.use("/", LoginRouter);
RootRoute.use("/coupon", CouponRouter);
RootRoute.use("/student", StudentRouter);
RootRoute.use("/**", NotFoundRouter);

export default RootRoute;
