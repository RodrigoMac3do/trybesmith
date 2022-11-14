import { IUsers } from '../interfaces';
import { UsersModel } from '../models';
import CreateToken from '../utils/jwt.util';

export default class UsersService {
  public users = new UsersModel();

  public token = new CreateToken();

  public async create(users: IUsers): Promise<string> {
    const user = await this.users.create(users);

    return this.token.createToken(user);
  }
}
