import { IUsers, IUsersID } from '../interfaces';
import { UsersModel } from '../models';

export default class UsersService {
  public users = new UsersModel();

  public async create(users: IUsers): Promise<IUsersID> {
    const user = await this.users.create(users);
    
    return user;
  }
}
