import { error } from "@repo/logs/logs";
import { Request, Response } from "express";
import { sendOTP } from "../service/user.service";



export async function sendOTPHandler(req : Request, res : Response){
    try{
        const body = req.body;
        const response = await sendOTP(body);

        return res.send(response);
    }
    catch(err : any){
        error("Failed to send OTP", err);
    }
}