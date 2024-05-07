import { Orders, PrismaClient } from "@repo/db/client";
import { Prisma } from "@repo/db/client";
import { error, info } from "@repo/logs/logs";
import { undefined } from "zod";

const primsa = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Specify the desired log levels
  });
export async function addOrder(input : Partial<Orders>){

    try{

        const order = await primsa.orders.create({
            data : {
                name: input.name || '',
                phoneNumber: input.phoneNumber || '',
                address: input.address || '',
                productsOrdered: input.productsOrdered || [],
                orderStatus: input.orderStatus || 'pending',
                
            }

        })
        return {success : true, data : order}
    }
    catch(err : any){
        error("Error in adding Order",err.errorMessage);
        return {success : false, error : "Failed to add Order"}
    }
}

export async function getOrders(){

    try{

        const orders = await primsa.orders.findMany();
        return {success : true, data : orders}
    }
    catch(err : any){
        error("Error in getting Orders",err);
        return {success : false, error : "Failed to get Orders"}
    }
}


export async function updateOrder(input : Partial<Orders>, orderId : string){

    try{
        info("order id in updatedOrder",orderId);
        const existingOrder = await primsa.orders.findUnique({
            where : {
                 id : orderId
            }
        })

        
        if(!existingOrder){
            return {success : false,  error : "Order is not there"}
        }

        await primsa.orders.update({

            where : {
                id : orderId
            }, 
            
            data : {...input}
        })

        return {success : true, data : "Order is updated"}
    }
    catch(err : any){
        error("Error in updating Order",err);
        return {success : false, errorMessage : "Failed to update Order", error : err}
    }
}


export async function deleteOrder(orderId : string){

    try{
        info("Order id in deleteOrder",orderId);
        const existingOrder = await primsa.orders.findUnique({
            where : {
                 id : orderId
            }
        })

        
        if(!existingOrder){
            return {success : false,  error : "Order is not there"}
        }

        await primsa.orders.delete({
            where : {
                id : orderId
            }
        })

        return {success : true, data : "Order is deleted"}
    }
    catch(err : any){
        error("Error in deleting Orders",err);
        return {success : false, errorMessage : "Failed to delete Order", error : err}
    }
}