import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./userModel";
import { ProductCart } from "./productCartModel";


@Table({
    tableName:'order',
    timestamps:false
})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull:false
    })
    total!:number; //admin or client. Either of those

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    UserId!: number;

    @BelongsTo(() => User)
    user!: User; //role

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    ProductCartId!: number;

    @BelongsTo(() => ProductCart)
    product_cart!: ProductCart;



}