import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Permissions } from "./permissionsModel";


@Table({
    tableName:'entity',
    timestamps:false
})
export class Entity extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.STRING(200),
        allowNull:false
    })
    name!:string; //admin or client. Either of those

    @HasMany(() => Permissions) //roleId
    permissions!:Permissions[];

    

}