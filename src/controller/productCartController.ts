import { Request, Response } from "express";
import { container } from "tsyringe";
import ProductCartService from "../service/productCartService";

export class ProductCartController {

  static async createProductCart(req: Request, res: Response) {
    try {
      const productCartService = container.resolve(ProductCartService);
      const reponse = await productCartService.createProductCart(req.body);
      res.status(201).json({
        status: 201,
        response: "order created successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async editProductCart(req: Request, res: Response) {
    try {
      const productCartService = container.resolve(ProductCartService);

      const reponse = await productCartService.updateProductCart(parseInt(req.params.id), req.body); //will expect quantity, name
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
      const productCartService = container.resolve(ProductCartService);
      const response = await productCartService.deleteProductCart(parseInt(req.params.id));
      res.status(204).json({
        status: 204,
        response: `${response} eliminated successfully`,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

}
