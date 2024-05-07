import { Express, Request, Response } from "express";
import validate from "./middleware/validateResource";
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "@repo/validations/schemas";
import {addProductSchema, deleteProductSchema, updateProductSchema} from "@repo/validations/products";
import { addCategoryHandler, deleteCategoryHandler, getCategoriesHandler, updateCategoryHandler } from "./controller/category.contoller";
import { addProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";
import { sendOTPSchema } from "@repo/validations/users";
import { sendOTPHandler } from "./controller/user.controller";
import { addOrderSchema, deleteOrderSchema, updateOrderSchema } from "@repo/validations/orders";
import { addOrderHandler, deleteOrderHandler, getOrdersHandler, updateOrderHandler } from "./controller/orders.controller";

function routes(app : Express){
    app.get('/healthcheck', (req : Request, res : Response) => res.sendStatus(200) );


    app.post('/api/user/sendOTP', validate(sendOTPSchema), sendOTPHandler);
    app.post('/api/products', validate(addProductSchema), addProductHandler)
    app.post('/api/categories', validate(addCategorySchema), addCategoryHandler);
    app.post('/api/order', validate(addOrderSchema), addOrderHandler);


    app.put('/api/order/:orderId', validate(updateOrderSchema), updateOrderHandler);
    app.put('/api/categories/:categoryId', validate(updateCategorySchema), updateCategoryHandler);
    app.put('/api/products/:productId', validate(updateProductSchema), updateProductHandler);

    app.get('/api/products/getOrders', getOrdersHandler)
    app.get('/api/products/getProducts', getProductHandler)
    app.get('/api/categories/getCategories', getCategoriesHandler);

    app.delete('/api/order/:orderId', validate(deleteOrderSchema), deleteOrderHandler);
    app.delete('/api/categories/:categoryId', validate(deleteCategorySchema), deleteCategoryHandler);
    app.delete('/api/products/:productId', validate(deleteProductSchema), deleteProductHandler );

}





export default routes;