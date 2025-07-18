import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";
import { customerRoutes } from "../modules/customer/customer.route";
import { salesRoutes } from "../modules/sales/sales.route";
import { reportRoutes } from "../modules/report/report.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/product',
        route: productRoutes,
    },
    {
        path: '/customer',
        route:customerRoutes,
    },
    {
        path:'/sales',
        route: salesRoutes
    },
    {
        path:'/report',
        route: reportRoutes
    }
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;