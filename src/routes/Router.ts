import { Router } from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";
import orderRouter from "./orderRouter";
import productCartRouter from "./productCartRouter";


const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/product-cart', productCartRouter);


export default router;