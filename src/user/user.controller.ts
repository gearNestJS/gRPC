import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  CreateUserRequest,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  UpdateUserRequest,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '../user/user';
import { UserService } from './user.service';

@Controller('users')
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  createUser(
    request: CreateUserRequest,
  ): Promise<User> | Observable<User> | User {
    return this.userService.createUser(request);
  }

  getUser(request: GetUserRequest): Promise<User> | Observable<User> | User {
    return this.userService.getUser(request);
  }

  updateUser(
    request: UpdateUserRequest,
  ): Promise<User> | Observable<User> | User {
    return this.userService.updateUser(request);
  }

  deleteUser(
    request: DeleteUserRequest,
  ):
    | Promise<DeleteUserResponse>
    | Observable<DeleteUserResponse>
    | DeleteUserResponse {
    return this.userService.deleteUser(request);
  }
}
