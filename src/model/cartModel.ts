import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./userModel";
import { ProductCart } from "./productCartModel";


@Table({
    tableName:'cart',
    timestamps:false
})
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;
    
     //admin or client. Either of those

     @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    UserId!: number;

     @BelongsTo(() => User)
     user!: User; //role


    @HasMany(() => ProductCart)
    product_cart!:ProductCart[]; //userId


}