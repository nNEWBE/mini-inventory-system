import { Router } from "express";
import { Customer } from "./customer.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/create', auth('admin'), Customer.createCustomer);
router.patch('/update/:id', auth('admin'), Customer.updateCustomer);
router.delete('/delete/:id', auth('admin'), Customer.deleteCustomer);
router.get('/', auth('admin'), Customer.getAllCustomers);

export const customerRoutes = router;