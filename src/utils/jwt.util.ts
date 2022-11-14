import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces';

dotenv.config();

const createToken = (data: ILogin) => {
  const payload = { username: data.username, password: data.password };

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '8h',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
