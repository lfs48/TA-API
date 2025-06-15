import { Request, Response, NextFunction } from 'express';
import { ZodObject } from "zod/v4";

export const validator = (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      req.body = parsed.body;
      next();
    } catch (error) {
      res.status(422).json(error);
    }
};