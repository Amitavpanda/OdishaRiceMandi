import { Category, PrismaClient } from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
const prisma = new PrismaClient();
export async function addCategory(input : Category){
    try{
        const category = await prisma.category.create({
            data : {
                name : input.name,
                pic : input.pic
            }
        })

        return {success : true, data : category};
    }
    catch(error){
        console.log("Error adding catgeory", error);
        return {success : false, error : 'Failed to add category'};
    }
}


export async function updateCategory(input : Partial<Category>, categoryId : number){
    try{
        const existingCategory = await prisma.category.findUnique({
            where : {id : categoryId}
        });

        if(!existingCategory) {
            return {success : false, error : "there is not category found"};
        }

        const updatedData = { ...input}
        console.log("updated Data", updatedData);

        const updatedCategory = await prisma.category.update({
            where : {id : categoryId},
            data : updatedData
        });

        return {success : true, data : updatedCategory};

    }
    catch(error){
        console.log("error in updating category", error);
        return {success : false, error : "Failed to update category"}
    }
}


export async function deleteCategory(categoryId : number){
    try{
        const existingCategory = await prisma.category.findUnique({
            where : {id : categoryId}
        });

        if(!existingCategory) {
            return {success : false, error : "there is not category found"};
        }

        await prisma.category.delete({
            where : {id : categoryId}
        })

        return {success : true}
    }

    catch(error){
        console.log("error in deleting category", error);
        return {success : false, error : "failed to delete category"};
    }
}


export async function getAllCategories(){
    try{
        const categories = await prisma.category.findMany();
        return {success : true, data : categories};
    }

    catch(error){
        console.log("error in getting categories", error);
        return {success : false, error : "failed to gett categories"};
    }
}






