import { UserStorage } from './../../core/services/storage/user.storage';
import { UserDto } from './../../core/interfaces/dto';
import { StorageManagerService } from 'src/app/core/services/storage/storage.manager';
import { Storage } from '@ionic/storage';
export class UserState {

  user  : Awaited<UserDto | Partial<UserDto> | Promise<any>>  =  intialState();
  token !: string | null;

  constructor() {

  }

}
export interface UserStateDto {
  user  : UserDto,
  token : string;
}
export async function intialState() {
  const user = await new UserStorage(new StorageManagerService(new Storage())).User;
  console.log(user);
  return !!user ? user : {}
}
