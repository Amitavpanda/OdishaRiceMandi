import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    categoryId : z.number().optional(),
    isSpecialProduct : z.boolean(), 
    productPic: z.string().optional(), 
    price : z.number(),
    quantity : z.number(),
    reviews : z.number(),
    isAvailable : z.boolean()
  }),
};

const params = {
  params: z.object({
    productId: string({
      required_error: "ProductId is required",
    }),
  }),
};

  export const addProductSchema = z.object({
      ...payload,
  });

export const updateProductSchema = z.object({
  ...payload,
  ...params,
})

export const deleteProductSchema = z.object({
  ...params,

})

export const getProductsSchema = z.object({
  ...params,

})

export type AddProduct = z.infer<typeof addProductSchema>;
export type UpdateProduct = z.infer<typeof updateProductSchema>;
export type DeleteProductSchema = z.infer<typeof updateProductSchema>;
export type GetProductSchema = z.infer<typeof getProductsSchema>;

