import { ILogin } from '../interfaces';
import { LoginModel } from '../models';
import HttpException from '../utils/http.exception';

export default class LoginService {
  public model = new LoginModel();

  public async verify(body: ILogin): Promise<ILogin> {
    const data = await this.model.verify(body);

    if (!data) {
      throw new HttpException(401, 'Username or password invalid');
    }

    return data;
  }
}
