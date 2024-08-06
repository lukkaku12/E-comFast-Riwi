import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Entity } from "./entityModel";
import { Role } from "./roleModel";


@Table({
    tableName:'permissions',
    timestamps:false
})
export class Permissions extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull:false
    })
    can_create!:boolean; 

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false
    })
    can_update!:boolean
    @Column({
        type:DataType.BOOLEAN,
        allowNull:false
    })
    can_delete!:boolean
    @Column({
        type:DataType.BOOLEAN,
        allowNull:false
    })
    can_get!:boolean
   // @HasMany() //roleId

   @ForeignKey(() => Entity)
   @Column({
       type: DataType.INTEGER,
       allowNull: false,
   })
   EntityId!: number;
    @BelongsTo(() => Entity)
    entity!: Entity;
    
    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    RoleId!: number;

    @BelongsTo(() => Role)
    role!: Role
}