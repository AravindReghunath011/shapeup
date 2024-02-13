import { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
       user: object;
       otp:string;
    }
   }

export { SessionData };
