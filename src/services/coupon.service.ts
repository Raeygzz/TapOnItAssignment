import { CouponQuery } from "../queries";
import { CouponMapper } from "../mappers";
import { CouponResponsePayload } from "../models";

export class CouponService {
  public static async findAllCoupons() {
    let data: CouponResponsePayload[] = (
      await CouponQuery.findAllCoupons()
    ).map((coupon) => {
      return CouponMapper.entityToResponseMapper(coupon);
    });

    return data;
  }

  public static async updateCouponById(id: number) {
    let couponEntity = await CouponQuery.findCouponById(id);

    if (couponEntity) {
      couponEntity.redeemed = true;

      await CouponQuery.updateCouponById(
        id,
        CouponMapper.requestToEntityMapper(couponEntity)
      );

      return "Sucess";
    }

    return "Student Does Not Exsist";
  }
}
