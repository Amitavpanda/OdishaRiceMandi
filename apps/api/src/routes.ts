import { Express, Request, Response } from "express";
import validate from "./middleware/validateResource";
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "@repo/validations/schemas";
import {addProductSchema, deleteProductSchema, updateProductSchema} from "@repo/validations/products";
import { addCategoryHandler, deleteCategoryHandler, getCategoriesHandler, updateCategoryHandler } from "./controller/category.contoller";
import { addProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";

function routes(app : Express){
    app.get('/healthcheck', (req : Request, res : Response) => res.sendStatus(200) );

    app.post('/api/products', validate(addProductSchema), addProductHandler)
    app.post('/api/categories', validate(addCategorySchema), addCategoryHandler);

    app.put('/api/categories/:categoryId', validate(updateCategorySchema), updateCategoryHandler);
    app.put('/api/products/:productId', validate(updateProductSchema), updateProductHandler);

    app.get('/api/products/getProducts', getProductHandler)
    app.get('/api/categories/getCategories', getCategoriesHandler);

    app.delete('/api/categories/:categoryId', validate(deleteCategorySchema), deleteCategoryHandler);
    app.delete('/api/products/:productId', validate(deleteProductSchema), deleteProductHandler );

}





export default routes;