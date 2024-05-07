import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    phoneNumber : z.string().optional(),
    address : z.string(), 
    productsOrdered: z.array(z.string()).optional(), 
    orderStatus : z.string()
  }),
};

const params = {
  params: z.object({
    orderId: string({
      required_error: "OrderId is required",
    }),
  }),
};

  export const addOrderSchema = z.object({
      ...payload,
  });

export const updateOrderSchema = z.object({
  ...payload,
  ...params,
})

export const deleteOrderSchema = z.object({
  ...params,

})

export const getOrdersSchema = z.object({
  ...params,

})

export type AddOrder = z.infer<typeof addOrderSchema>;
export type UpdateOrder = z.infer<typeof updateOrderSchema>;
export type DeleteOrderSchema = z.infer<typeof updateOrderSchema>;
export type GetProductSchema = z.infer<typeof getOrdersSchema>;

