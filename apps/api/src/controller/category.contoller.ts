import { Request, Response, response } from "express";
import { addCategory, deleteCategory, getAllCategories } from "../service/category.service";
import { info } from "@repo/logs/logs";
import { updateCategory } from "../service/category.service";
export async function addCategoryHandler(req : Request, res : Response) {

    const body = req.body;
    info("req body :", body);
    const response = await addCategory(body);

    return res.send(response);

}

export async function updateCategoryHandler(req : Request, res : Response){
    const body = req.body;
    const categoryId = parseInt(req.params.categoryId || '');
    if(isNaN(categoryId)) {
        return res.send(400).json({error : "Invalid categoryId"});
    }
    const reponse = await updateCategory(body, categoryId);
    return res.send(response);
}

export async function deleteCategoryHandler(req : Request, res : Response) {
    const categoryId = parseInt(req.params.categoryId || '');
    if(isNaN(categoryId)){
        return res.send(400).json({error : "Invalid categoryId"});
    }

    const response = await deleteCategory(categoryId);
    return res.send(response);

}


export async function getCategoriesHandler(req : Request, res : Response) {
   
    const response = await getAllCategories();
    return res.send(response);

}


