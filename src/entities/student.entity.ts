import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Student" })
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ nullable: true, type: "varchar" })
  firstName?: string;

  @Column({ nullable: true, type: "varchar" })
  lastName?: string;

  @Column({ nullable: true, type: "varchar" })
  accessToken?: string;

  @Column({ nullable: true, type: "varchar" })
  city?: string;

  @Column({ nullable: true, type: "varchar" })
  state?: string;

  @Column({ nullable: true, type: "varchar" })
  zip?: string;

  @Column({ nullable: true, type: "boolean" })
  sent?: boolean;

  @CreateDateColumn({ nullable: true })
  created_at?: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at?: Date;
}
