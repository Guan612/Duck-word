import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    if (req.headers.authorization) {
      // TODO: 验证token
    } else {
      // TODO: 没有token
      res.status(401).send({
        code: 1,
        message: '没有token',
      });
      return;
    }
    next();
  }
}
