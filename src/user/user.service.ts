import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateUserRequest,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  UpdateUserRequest,
  User,
} from './user';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(request: CreateUserRequest): User {
    const user = { id: this.users.length + 1, ...request };
    this.users.push(user);

    return user;
  }

  getUser(request: GetUserRequest): User {
    const user = this.users.find((user) => user.id === request.id);
    if (!user) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    return user;
  }

  updateUser(request: UpdateUserRequest): User {
    const userIndex = this.users.findIndex((user) => user.id === request.id);

    if (userIndex === -1) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    this.users[userIndex] = { ...this.users[userIndex], ...request };

    return this.users[userIndex];
  }

  deleteUser(request: DeleteUserRequest): DeleteUserResponse {
    const userIndex = this.users.findIndex((user) => user.id === request.id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return { success: true };
    }

    return { success: false };
  }
}
