import { injectable } from "tsyringe";
import { ProductCart } from "../model";

@injectable()
export class ProductCartRepository {
   async getAllProductCarts() {
    return await ProductCart.findAll();
  }

   async addProductCart(productCart: Partial<ProductCart>) {
    return await ProductCart.create(productCart);
}


async update(id: number, productCart: Partial<ProductCart>){
    return await ProductCart.update(productCart, {where: {id}});
}

async delete(id: number){
    return await ProductCart.destroy({where: {id}});
}

}
