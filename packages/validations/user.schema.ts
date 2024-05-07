import * as z from "zod";
import { object, number, string, TypeOf } from "zod";
import path from "path";


export const sendOTPSchema = z.object({
    body : z.object({
        phoneNumber : z.string().min(10, { message: 'Phone number must be at least 10 digits long.' }).max(10, { message: 'Phone number should not be more than 10 digits long.' })
    })
})

const params = {
  params: z.object({
    productId: string({
      required_error: "ProductId is required",
    }),
  }),
};



export type SendOTSchema = z.infer<typeof sendOTPSchema>;



