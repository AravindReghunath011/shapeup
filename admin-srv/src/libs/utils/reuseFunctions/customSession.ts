import { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
       admin: object;
       
    }
   }

export { SessionData };
