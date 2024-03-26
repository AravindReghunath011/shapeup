// uploadMediaMiddleware.ts
import { RequestHandler } from 'express';
import { uploadMedia } from './s3Video'; // Adjust the path accordingly


// Define the type for uploadMedia middleware
const uploadMediaMiddleware: RequestHandler = (req, res, next) => {
    (uploadMedia as any).single('file')(req, res, (err: any) => { // Using 'any' temporarily to resolve the TypeScript error
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        next(); // Move to the next middleware if no error
    });
};

export default uploadMediaMiddleware;

