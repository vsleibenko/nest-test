import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType } from 'sequelize-typescript';

@Table
export class Session extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  userId: number;

  @AllowNull(false)
  @Column
  refreshToken: typeof DataType.UUIDV4;

  @AllowNull(false)
  @Column
  fingerprint: string;

  @AllowNull(false)
  @Column
  expiresIn: bigint;
}