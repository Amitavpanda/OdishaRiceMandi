import { Request, Response } from "express"
import { error } from "@repo/logs/logs";
import { info } from "@repo/logs/logs";
import { addProduct, deleteProduct, updateProduct } from "../service/product.service";
import { getProducts } from "../service/product.service";
export async function addProductHandler(req :Request, res : Response){
    
    try{
        const body = req.body;
        info("body in adding product", body);
        const response = await addProduct(body);
        return res.send(response);
    }
    catch(err : any){
        error("Error in adding Product Controller", err);
    }
}


export async function getProductHandler(req :Request, res : Response){
    
    try{
        const response = await getProducts();
        return res.send(response);
    }
    catch(err : any){
        error("Error in getting Product Controller", err);
    }
}


export async function deleteProductHandler(req :Request, res : Response){
    
    try{
        const productId = req.params.productId || ''
        info("product id", productId);
        const response = await deleteProduct(productId);
        return res.send(response);
    }
    catch(err : any){
        error("Error in deleting Product Controller", err);
    }
}


export async function updateProductHandler(req :Request, res : Response){
    
    try{
        const productId = req.params.productId || ''
        info("product id", productId);
        const body = req.body
        const response = await updateProduct(body, productId);
        return res.send(response);
    }
    catch(err : any){
        error("Error in deleting Product Controller", err);
    }
}