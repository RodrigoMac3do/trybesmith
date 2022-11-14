// import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces';
import { LoginModel } from '../models';
import HttpException from '../utils/http.exception';
import createToken from '../utils/jwt.util';

export default class LoginService {
  public model = new LoginModel();

  public async verify(body: ILogin): Promise<string> {
    const data = await this.model.verify(body);

    if (data.length === 0) {
      throw new HttpException(401, 'Username or password invalid');
    }

    return createToken(data[0]);
  }
}
