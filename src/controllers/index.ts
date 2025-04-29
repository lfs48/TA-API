import { Request, Response } from 'express';

// Example controller function for handling a GET request
export const getExample = async (req: Request, res: Response) => {
    try {
        // Logic to retrieve data (e.g., from a database)
        const data = {}; // Replace with actual data retrieval logic
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Example controller function for handling a POST request
export const createExample = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        // Logic to create a new resource (e.g., save to a database)
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export all controller functions
export default {
    getExample,
    createExample,
};