import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const createToken = (data: object) => {
  const payload = { data };

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '8h',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
