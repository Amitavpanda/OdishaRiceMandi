import { Prisma, Product , PrismaClient} from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
import { v4 as uuidv4 } from 'uuid'

const primsa = new PrismaClient();

export async function addProduct(input : Product){

    try{

        const product = await primsa.product.create({
            data : {
                name : input.name,
                categoryId : input.categoryId,
                isSpecialProduct : input.isSpecialProduct,
                productPic : input.productPic,
                price : input.price,
                quantity : input.quantity,
                reviews :input.reviews,
                isAvailable : input.isAvailable
            }

        })
        return {success : true, data : product}
    }
    catch(err : any){
        error("Error in adding Product",err);
        return {success : false, error : "Failed to add Product"}
    }
}


export async function getProducts(){

    try{

        const product = await primsa.product.findMany();
        return {success : true, data : product}
    }
    catch(err : any){
        error("Error in getting Products",err);
        return {success : false, error : "Failed to get Product"}
    }
}


export async function deleteProduct(productId : string){

    try{
        info("product id in deleteProduct",productId);
        const existingProduct = await primsa.product.findUnique({
            where : {
                 id : productId
            }
        })

        
        if(!existingProduct){
            return {success : false,  error : "Product is not there"}
        }

        await primsa.product.delete({
            where : {
                id : productId
            }
        })

        return {success : true, data : "Product is deleted"}
    }
    catch(err : any){
        error("Error in deleting Products",err);
        return {success : false, errorMessage : "Failed to delete Product", error : err}
    }
}


export async function updateProduct(input : Partial<Product>, productId : string){

    try{
        info("product id in updateProduct",productId);
        const existingProduct = await primsa.product.findUnique({
            where : {
                 id : productId
            }
        })

        
        if(!existingProduct){
            return {success : false,  error : "Product is not there"}
        }

        await primsa.product.update({

            where : {
                id : productId
            }, 
            
            data : {...input}
        })

        return {success : true, data : "Product is updated"}
    }
    catch(err : any){
        error("Error in updating Products",err);
        return {success : false, errorMessage : "Failed to update Product", error : err}
    }
}