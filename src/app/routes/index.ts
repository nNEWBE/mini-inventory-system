import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";
import { customerRoutes } from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/product',
        route: productRoutes,
    },
    {
        path: '/customer',
        route:customerRoutes,
    }
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;