import { inject, injectable } from "tsyringe";
import { Order } from '../model';
import { OrderInventory } from '../repository/orderRepository';

@injectable()
export default class OrderService {
   constructor(@inject(OrderInventory) private orderRepository: OrderInventory) { }

   async getAllOrders() {
      const [rows] = await this.orderRepository.getAllOrders();
      return rows;
   }


   async createOrder(order: Partial<Order>) {
      const result = await this.orderRepository.addOrders(order);
      return result;
   }

   async deleteOrder(id: number) {
      const result = await this.orderRepository.delete(id);
      return result;
   }

   async updateOrder(id: number, order: Partial<Order>) {
      return await this.orderRepository.update(id, order);
   }

   async getByUserId(id: number) {
      return await this.orderRepository.getByUserId(id);
   }

   //falta obtener por id de usuario
}