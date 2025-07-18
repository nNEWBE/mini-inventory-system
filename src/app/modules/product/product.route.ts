import { Router } from "express";
import { Product } from "./product.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/create', auth('admin'), Product.createProduct);
router.patch('/update/:id', auth('admin'), Product.updateProduct);
router.delete('/delete/:id', auth('admin'), Product.deleteProduct);
router.get('/', auth('admin'), Product.getAllProducts);

export const productRoutes = router;