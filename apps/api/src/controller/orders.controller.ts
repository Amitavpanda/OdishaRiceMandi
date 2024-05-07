import { Request, Response } from "express"
import { error } from "@repo/logs/logs";
import { info } from "@repo/logs/logs";
import { addOrder, deleteOrder, getOrders, updateOrder } from "../service/order.service";

export async function addOrderHandler(req :Request, res : Response){
    
    try{
        const body = req.body;
        info("body in adding order", body);
        const response = await addOrder(body);
        return res.send(response);
    }
    catch(err : any){
        error("Error in adding Order Controller", err);
    }
}


export async function getOrdersHandler(req :Request, res : Response){
    
    try{
        const response = await getOrders();
        return res.send(response);
    }
    catch(err : any){
        error("Error in getting Order Controller", err);
    }
}


export async function deleteOrderHandler(req :Request, res : Response){
    
    try{
        const orderId = req.params.orderId || ''
        info("Order id", orderId);
        const response = await deleteOrder(orderId);
        return res.send(response);
    }
    catch(err : any){
        error("Error in deleting Order Controller", err);
    }
}


export async function updateOrderHandler(req :Request, res : Response){
    
    try{
        const orderId = req.params.orderId || ''
        info("order id", orderId);
        const body = req.body
        const response = await updateOrder(body, orderId);
        return res.send(response);
    }
    catch(err : any){
        error("Error in updating Order Controller", err);
    }
}