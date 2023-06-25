import { CouponEntity } from "../entities";
import { CouponRequestPayload, CouponResponsePayload } from "../models";

export class CouponMapper {
  public static requestToEntityMapper(requestPayload: CouponRequestPayload) {
    let couponEntity = new CouponEntity();

    couponEntity.name = requestPayload.name;
    couponEntity.redeemed = requestPayload.redeemed;
    couponEntity.promoCode = requestPayload.promoCode;

    return couponEntity;
  }

  public static entityToResponseMapper(
    entity: CouponEntity
  ): CouponResponsePayload {
    let couponResponse: CouponResponsePayload = {
      id: entity.id,
      name: entity.name,
      redeemed: entity.redeemed,
      promoCode: entity.promoCode,
    };

    return couponResponse;
  }
}
