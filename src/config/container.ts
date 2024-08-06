import { container } from "tsyringe";
import { ProductInventory } from "../repository/productRepository";
import ProductService from "../service/productService";


container.registerSingleton(ProductInventory);
container.registerSingleton(ProductService)