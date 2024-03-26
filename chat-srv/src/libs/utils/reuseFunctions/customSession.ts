import { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
       userId: string;
       
    }
   }

export { SessionData };
