import { Request, Response } from "express";
import { container } from "tsyringe";
import OrderService from "../service/orderService";

export class OrderController {
  static async getAll(_req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const response = await orderService.getAllOrders();
      res.status(200).json({
        status: 200,
        result: response,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }


  static async createOrder(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const reponse = await orderService.createOrder(req.body);
      res.status(201).json({
        status: 201,
        response: "order created successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async editOrder(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);

      const reponse = await orderService.updateOrder(parseInt(req.params.id), req.body); //will expect quantity, name
      res.status(214).json({
        status: 214,
        response: "order transformed successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const response = await orderService.deleteOrder(parseInt(req.params.id));
      res.status(204).json({
        status: 204,
        response: `${response} eliminated successfully`,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  static async getByUserId(req:Request, res:Response) {
    try {
      const orderService = container.resolve(OrderService);
      const response = await orderService.getByUserId(parseInt(req.params.id));
      res.status(200).json({
        status: 200,
        response: response
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

}
