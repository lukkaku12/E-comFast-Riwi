import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ProductCart } from "./productCartModel";


@Table({
    tableName:'product',
    timestamps:false
})
export class Product extends Model {
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
    name!:string;

    @Column({
        type:DataType.DECIMAL(10, 2),
        allowNull:false
    })
    price!:number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    description!:string;
    
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    stock!:number;

    @HasMany(() =>  ProductCart)
    product_cart!:ProductCart[]
}