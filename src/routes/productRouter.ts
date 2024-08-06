import { Router } from "express";
import { productController } from "../controller/productController";


const productRouter = Router()

productRouter.get('/', productController.getAll);
productRouter.post('/', productController.createProduct);
productRouter.put('/:id', productController.editProduct);
productRouter.delete('/:id', productController.delete)
//funciona

export default productRouter;