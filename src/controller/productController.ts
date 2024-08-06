import { Request, Response } from "express";
import { container } from "tsyringe";
import ProductService from "../service/productService";

export class productController {
  static async getAll(req: Request, res: Response) {
    try {
      const productService = container.resolve(ProductService);
      const response = await productService.getAllProducts();
      res.status(200).json({
        status: 200,
        result: response,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }


  static async createProduct(req: Request, res: Response) {
    try {
      const productService = container.resolve(ProductService);
      const reponse = await productService.createProduct(req.body);
      res.status(201).json({
        status: 201,
        response: "product created successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async editProduct(req: Request, res: Response) {
    try {
      const productService = container.resolve(ProductService);

      const reponse = await productService.updateProduct(parseInt(req.params.id), req.body); //will expect quantity, name
      res.status(204).json({
        status: 204,
        response: "product transformed successfully",
        extra: reponse,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const productService = container.resolve(ProductService);
      const response = await productService.deleteProduct(parseInt(req.params.id));
      res.status(204).json({
        status: 204,
        response: `${response} eliminated successfully`,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

}
