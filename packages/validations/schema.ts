import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


const payload = {
  body: z.object({
    name: z.string().min(1).max(255).optional(), 
    pic: z.string().optional(), 
  }),
};

const params = {
  params: z.object({
    categoryId: string({
      required_error: "categoryId is required",
    }),
  }),
};

  export const addCategorySchema = z.object({
      ...payload,
  });

export const updateCategorySchema = z.object({
  ...payload,
  ...params,
})

export const deleteCategorySchema = z.object({
  ...params,

})

export const getCategorySchema = z.object({
  ...params,

})

export type AddCategory = z.infer<typeof addCategorySchema>;
export type UpdateCategory = z.infer<typeof updateCategorySchema>;
export type DeleteCategorySchema = z.infer<typeof updateCategorySchema>;
export type GetCategorySchema = z.infer<typeof getCategorySchema>;


