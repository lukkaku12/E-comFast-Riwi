import { Router } from "express";
import { ProductCartController } from "../controller/productCartController";


const productCartRouter = Router();

productCartRouter.post('/', ProductCartController.createProductCart);
productCartRouter.delete('/:id', ProductCartController.delete);
productCartRouter.put('/:id', ProductCartController.editProductCart);

//funcionan
export default productCartRouter;