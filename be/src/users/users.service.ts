import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './interfaces/user.create.dto';
import { UserDto } from './interfaces/user.dto';
import { UpdateUserDto } from './interfaces/user.update.dto';
import * as bcrypt from 'bcrypt';
import { Role } from './entities/role.enum';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schemas';
import { Model } from 'mongoose';
// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  private readonly users: UserDto[] = [
    {
      _id: '1',
      username: 'john',
      password: '123',
      email: 'changeme@gmail.com',
      createdAt: new Date(),
      role: Role.ADMIN,
    },
    {
      _id: '2',
      username: 'maria',
      password: '123',
      email: 'changeme@gmail.com',
      createdAt: new Date(),
      role: Role.USER,
    },
  ];

  async findById({ id }: { id: string }): Promise<User> {
    return await this.model.findById(id).exec();
  }
  async findByName({ username }: { username: string }): Promise<User> {
    return await this.model.findOne({ username: username }).exec();
  }

  async create({ userDto }: { userDto: CreateUserDto }): Promise<User> {
    const newUser = this.fromDtoToUser({ userDto: userDto });

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    newUser.password = await bcrypt.hash(newUser.password, salt);

    return await new this.model({
      ...newUser,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne({ id }: { id: string }): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async update({
    id,
    updateUserDto,
  }: {
    id: string;
    updateUserDto: UpdateUserDto;
  }): Promise<User> {
    const user = this.model.findOne({ id: id });
    if (user) {
      const user = this.fromDtoToUser({ userDto: updateUserDto });
      return await this.model.findByIdAndUpdate(id, user).exec();
    }
    return null;
  }

  async remove({ id }: { id: string }): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  fromDtoToUser({ userDto }: { userDto: CreateUserDto | UpdateUserDto }): User {
    return {
      _id: Object.keys(userDto).includes('id') ? userDto['id'] : randomUUID(),
      username: userDto.username,
      password: userDto.password,
      email: userDto.email,
      role: userDto.role === 'admin' ? Role.ADMIN : Role.USER,
      createdAt: new Date(),
    };
  }
}
