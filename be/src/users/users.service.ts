import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './interfaces/user.create.dto';
import { UserDto } from './interfaces/user.dto';
import { UpdateUserDto } from './interfaces/user.update.dto';
import * as bcrypt from 'bcrypt';
import { Role } from './entities/role.enum';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      id: '1',
      username: 'john',
      password: '123',
      email: 'changeme@gmail.com',
      createdOn: new Date(),
      role: Role.ADMIN,
    },
    {
      id: '2',
      username: 'maria',
      password: '123',
      email: 'changeme@gmail.com',
      createdOn: new Date(),
      role: Role.USER,
    },
  ];

  async findByName({ username }: { username: string }): Promise<UserDto> {
    return this.users.find((user) => user.username === username);
  }

  async create({ userDto }: { userDto: CreateUserDto }): Promise<void> {
    const newUser = this.fromDtoToUser({ userDto: userDto });

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    newUser.password = await bcrypt.hash(newUser.password, salt);

    this.users.push(newUser);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne({ id }: { id: string }) {
    return this.users.find((user) => user.id === id);
  }

  update({ id, updateUserDto }: { id: string; updateUserDto: UpdateUserDto }) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index != -1) {
      const user = this.fromDtoToUser({ userDto: updateUserDto });
      const updatedUser = {
        ...user,
        id: this.users[index]['id'],
      };
      this.users[index] = updatedUser;
      return this.users[index];
    }
    return null;
  }

  remove({ id }: { id: string }) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index != -1) {
      this.users.splice(index, 1);
      return true;
    }
    return null;
  }

  fromDtoToUser({ userDto }: { userDto: CreateUserDto | UpdateUserDto }): User {
    return {
      id: randomUUID(),
      username: userDto.username,
      password: userDto.password,
      email: userDto.email,
      role: userDto.role,
      createdOn: new Date(),
    };
  }
}
