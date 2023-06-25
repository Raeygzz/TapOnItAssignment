import { AppDataSource } from "../configs";
import { CouponEntity } from "../entities";

export class CouponQuery {
  public static findAllCoupons() {
    return AppDataSource.getRepository(CouponEntity).find();
  }

  public static findCouponById(id: number) {
    return AppDataSource.getRepository(CouponEntity).findOne({
      where: { id: id },
    });
  }

  public static updateCouponById(id: number, coupon: CouponEntity) {
    return AppDataSource.getRepository(CouponEntity).update(id, coupon);
  }
}
