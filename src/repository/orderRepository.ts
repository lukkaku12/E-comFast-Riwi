import { injectable } from "tsyringe";
import { Order } from "../model";

@injectable()
export class OrderInventory {
    async getAllOrders() {
        return await Order.findAll();
    }

    async addOrders(order: Partial<Order>): Promise<Order> {
        return await Order.create(order);
    }


    async update(id: number, order: Partial<Order>) {
        return await Order.update(order, { where: { id } });
    }

    async delete(id: number) {
        return await Order.destroy({ where: { id } });
    }

    async getByUserId(id: number) {
        return await Order.findOne({where:{UserId: id}})
    }

}
