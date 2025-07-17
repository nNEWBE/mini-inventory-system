import { Router } from "express";
import { Customer } from "./customer.controller";

const router = Router();

router.post('/create', Customer.createCustomer);
router.patch('/update/:id', Customer.updateCustomer);
router.delete('/delete/:id', Customer.deleteCustomer);
router.get('/', Customer.getAllCustomers);

export const customerRoutes = router;