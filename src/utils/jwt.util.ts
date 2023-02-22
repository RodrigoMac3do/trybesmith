import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IToken } from '../interfaces';
import HttpException from './HttpException';

dotenv.config();

export default class Jwt {
  private jwt = jwt;

  public createToken = (payload: object): string => {
    const token = this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '8h',
      algorithm: 'HS256',
    });

    return token;
  };

  public verifyToken = (token: string): IToken => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string);

      return payload as IToken;
    } catch (error) {
      throw new HttpException(401, 'Invalid token');
    }
  };
}
