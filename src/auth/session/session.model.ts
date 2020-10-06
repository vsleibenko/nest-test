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
  @Column(DataType.UUID)
  refreshToken: string;

  @AllowNull(false)
  @Column
  fingerprint: string;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  expiresIn: number;
}