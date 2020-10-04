import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  age: number;

  @Column
  breed: string;
}