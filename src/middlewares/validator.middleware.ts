import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodObject } from "zod/v4";

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
      console.log(error)
      if (error instanceof ZodError) {
        const messages = error.issues.map(issue => issue.message);
        res.status(422).json({ messages });
      } else {
        res.status(422).json({ messages: ["Validation failed"] });
      }
    }
};