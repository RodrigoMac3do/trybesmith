import { IUsers } from '../interfaces';
import { UsersModel } from '../models';
import createToken from '../utils/jwt.util';

export default class UsersService {
  public users = new UsersModel();

  public async create(users: IUsers): Promise<string> {
    const user = await this.users.create(users);
    
    return createToken(user);
  }
}
