import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Coupon" })
export class CouponEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  promoCode: string;

  @Column({ type: "boolean", default: false })
  redeemed: boolean;
}
