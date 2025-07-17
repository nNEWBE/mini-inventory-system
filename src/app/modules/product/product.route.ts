import { Router } from "express";
import { Product } from "./product.controller";

const router = Router();

router.post('/create', Product.createProduct);
router.patch('/update/:id', Product.updateProduct);
router.delete('/delete/:id', Product.deleteProduct);
router.get('/', Product.getAllProducts);

export const productRoutes = router;