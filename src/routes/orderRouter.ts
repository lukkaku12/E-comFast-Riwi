import { Router } from "express";
import { OrderController } from "../controller/orderController";


const orderRouter = Router();

orderRouter.get('/', OrderController.getAll);
orderRouter.post('/', OrderController.createOrder);
orderRouter.put('/:id', OrderController.editOrder);
orderRouter.delete('/:id', OrderController.delete);
orderRouter.get('/:id/user', OrderController.getByUserId)

//todas funcionan

export default orderRouter;