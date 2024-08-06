import { inject, injectable } from "tsyringe";
import {  ProductCart } from '../model';
import { ProductCartRepository } from "../repository/productCartRepository";

@injectable()
export default class ProductCartService {
 constructor(@inject(ProductCartRepository) private productCartRepository:ProductCartRepository) {}

 async getAllProductCarts() {
    const [rows] = await this.productCartRepository.getAllProductCarts();
    return rows;
 }


 async createProductCart(order: Partial<ProductCart>) {
    const result = await this.productCartRepository.addProductCart(order);
    return result;
 }

 async deleteProductCart(id:number) {
    const result = await this.productCartRepository.delete(id);
    return result;
 }

 async updateProductCart(id: number, productCart: Partial<ProductCart>) {
         return await this.productCartRepository.update(id, productCart);
     }


}