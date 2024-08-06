import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "./productsModel";
import { Cart } from "./cartModel";
import { Order } from "./OrderModel";


@Table({
    tableName:'productCart',
    timestamps:false
})
export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    quantity!:number; //admin or client. Either of those

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    ProductId!: number;

    @BelongsTo(() => Product)
    product!: Product; //roleId


    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    CartId!: number;

    @BelongsTo(() => Cart)
    cart!: Cart; //role

    @HasMany(() => Order)
    order!: Order[]
}