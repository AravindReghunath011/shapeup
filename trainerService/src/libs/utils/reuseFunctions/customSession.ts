import { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
       trainer: object;
       otp:string;
    }
   }

export { SessionData };
