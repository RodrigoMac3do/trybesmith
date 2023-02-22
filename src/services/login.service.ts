import { ILogin } from '../interfaces';
import { LoginModel } from '../models';
import HttpException from '../utils/HttpException';
import Jwt from '../utils/jwt.util';

export default class LoginService {
  public model: LoginModel;

  private jwt: Jwt;

  constructor() {
    this.model = new LoginModel();
    this.jwt = new Jwt();
  }

  public async signIn(body: ILogin): Promise<string> {
    const user = await this.model.signIn(body);

    if (!user) {
      throw new HttpException(401, 'Username or password invalid');
    }

    const { password, ...userWithoutPassword } = user;

    return this.jwt.createToken(userWithoutPassword);
  }
}
