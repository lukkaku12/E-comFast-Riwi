import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./userModel";
import { Permissions } from "./permissionsModel";


@Table({
    tableName:'role',
    timestamps:false
})
export class Role extends Model {
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
    name!:string; //admin or client. Either of those

    @HasMany(() => User)
    user!:User[]

    @HasMany(() => Permissions)
    permissions!: Permissions[]
}