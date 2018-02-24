import { Component, HttpException } from '@nestjs/common';
import { RegisterDTO } from '../dto/requests/register.dto';
import { OwnUserDataDto } from '../dto/responses/own-user-data.dto';
import { UserDao } from '../business/dao/user.dao';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { IUser } from '../business/interfaces/user.interface';
import { LoginDto } from '../dto/requests/login.dto';

@Component()
export class UserService {
    constructor(private readonly userDao: UserDao) {
    }

    async register(registerDto: RegisterDTO): Promise<OwnUserDataDto> {
        let user: IUser;
        try {
            user = await this.userDao.createUser(
                registerDto.login,
                hashSync(
                    registerDto.password,
                    genSaltSync(10)
                )
            );
        } catch (err) {
            throw new HttpException('An error occured during user saving', 500);
        }
        // TODO establish session
        return OwnUserDataDto.fromUser(user);
    }

    async login(loginDto: LoginDto): Promise<OwnUserDataDto> {
        let user: IUser;
        try {
            user = await this.userDao.getUserByLogin(loginDto.login);
        } catch (err) {
            throw new HttpException('An error occured during signin', 500);
        }
        if ( !user ) {
            throw new HttpException('invalid credentials', 401);
        }
        if ( !compare(loginDto.password, user.password) ) {
            throw new HttpException('invalid credentials', 401);
        }
        // TODO establish session
        return OwnUserDataDto.fromUser(user);
    }

}