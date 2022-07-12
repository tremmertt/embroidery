import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/interfaces/user-login.dto';
import { CreateUserDto } from 'src/users/interfaces/user.create.dto';
import { UserDto } from 'src/users/interfaces/user.dto';
import { UsersService } from '../users/users.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import * as bcrypt from 'bcrypt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      this.usersService.create({
        userDto: userDto,
      });
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.usersService.findByName({
      username: payload.username,
    });
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const { id, password, ...result } = user;
    return result;
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.usersService.findByName({ username: username });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const validPassword = this.comparePasswords({
      newPassword: password,
      passwortHash: user.password,
    });
    if (!validPassword) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.findByLogin(loginUserDto);

    // generate and sign token
    const token = await this._createToken({ username: user.username });

    return {
      username: user.username,
      ...token,
    } as LoginStatus;
  }

  private async _createToken({ username }: { username: string }): Promise<any> {
    const expiresIn = process.env.EXPIRESIN || '30s';

    const user: JwtPayload = { username };
    const accessToken = await this.generateJWT(user);
    return {
      expiresIn,
      accessToken,
    };
  }

  generateJWT(user: any): Promise<string> {
    return this.jwtService.signAsync(user);
  }

  async comparePasswords({
    newPassword,
    passwortHash,
  }: {
    newPassword: string;
    passwortHash: string;
  }): Promise<boolean> {
    return await bcrypt.compare(newPassword, passwortHash);
  }
}
