import { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
       trainer: {
         name:string,
         password:string,
         email:string
       };
       otp:string;
    }
   }

export { SessionData };
