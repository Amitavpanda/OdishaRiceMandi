import { Express, Request, Response } from "express";
import validate from "./middleware/validateResource";
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "@repo/validations/schemas";
import { addCategoryHandler, deleteCategoryHandler, getCategoriesHandler, updateCategoryHandler } from "./controller/category.contoller";

function routes(app : Express){
    app.get('/healthcheck', (req : Request, res : Response) => res.sendStatus(200) );
    app.post('/api/categories', validate(addCategorySchema), addCategoryHandler);
    app.put('/api/categories/:categoryId', validate(updateCategorySchema), updateCategoryHandler);
    app.get('/api/categories/getCategories', getCategoriesHandler);
    app.delete('/api/categories/:categoryId', validate(deleteCategorySchema), deleteCategoryHandler);
}







export default routes;