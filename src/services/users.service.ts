import { IUsers } from '../interfaces';
import { UsersModel } from '../models';
import Jwt from '../utils/jwt.util';

export default class UsersService {
  private model: UsersModel;

  private jwt: Jwt;

  constructor() {
    this.model = new UsersModel();
    this.jwt = new Jwt();
  }

  public async create(users: IUsers): Promise<string> {
    const user = await this.model.create(users);

    const { password, ...userWithoutPassword } = user;

    return this.jwt.createToken(userWithoutPassword);
  }
}
