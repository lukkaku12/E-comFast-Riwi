import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./roleModel";
import { Cart } from "./cartModel";
import { Order } from "./OrderModel";


@Table({
    tableName:'user',
    timestamps:false
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    email!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    password!:string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    RoleId!: number;

    @BelongsTo(() => Role)
    role!: Role; //role

    @HasMany(() => Cart)
    cart!: Cart[];

    @HasMany(() => Order)
    order!: Order[];


}