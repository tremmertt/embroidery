import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from './entities/role.enum';
import { hasRole } from './roles.decorator';
import { CreateUserDto } from './interfaces/user.create.dto';
import { UpdateUserDto } from './interfaces/user.update.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './schemas/users.schemas';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @hasRole(Role.ADMIN)
  @UseGuards(AuthGuard())
  public async create(@Body() userDto: CreateUserDto) {
    return this.usersService.create({ userDto: userDto });
  }

  @Get()
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById({ id: id });
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @hasRole(Role.ADMIN)
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update({ id: id, updateUserDto: updateUserDto });
  }

  @Delete(':id')
  @hasRole(Role.ADMIN)
  public async remove(@Param('id') id: string): Promise<void> {
    this.usersService.remove({ id: id });
  }
}
