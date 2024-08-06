import { injectable } from "tsyringe";
import { Product } from "../model";

@injectable()
export class ProductInventory {
   async getAllProducts() {
    return await Product.findAll();
  }

   async addProducts(product: Partial<Product>): Promise<Product> {
    return await Product.create(product);
}


async update(id: number, product: Partial<Product>){
    return await Product.update(product, {where: {id}});
}

async delete(id: number){
    return await Product.destroy({where: {id}});
}

}
