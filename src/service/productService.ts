import { User } from './../model/userModel';
import { inject, injectable } from "tsyringe";
import {ProductInventory} from "../repository/productRepository";
import { Product } from '../model';

@injectable()
export default class ProductService {
 constructor(@inject(ProductInventory) private productRepository:ProductInventory) {}

 async getAllProducts() {
    const [rows] = await this.productRepository.getAllProducts();
    return rows;
 }


 async createProduct(product: Partial<Product>) {
    const result = await this.productRepository.addProducts(product);
    return result;
 }

 async deleteProduct(id:number) {
    const result = await this.productRepository.delete(id);
    return result;
 }

 async updateProduct(id: number, product: Partial<Product>) {
         return await this.productRepository.update(id, product);
     }

}