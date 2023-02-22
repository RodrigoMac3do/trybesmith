import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
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

  public verifyToken = (token: string): jwt.JwtPayload | string => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string);

      return payload;
    } catch (error) {
      throw new HttpException(401, 'Invalid token');
    }
  };

  public decoderToken = (token: string): jwt.JwtPayload => {
    const payload = jwt.decode(token);

    return payload as object;
  };
}
