import { Component, HttpException } from '@nestjs/common';
import { RegisterDTO } from '../dto/requests/register.dto';
import { OwnUserDataDTO } from '../dto/responses/own-user-data.dto';
import { UserDao } from '../business/dao/user.dao';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { IUser } from '../business/interfaces/user.interface';
import { LoginDTO } from '../dto/requests/login.dto';

@Component()
export class UserService {
    constructor(private readonly userDao: UserDao) {
    }

    async register(registerDTO: RegisterDTO): Promise<OwnUserDataDTO> {
        let user: IUser;
        try {
            user = await this.userDao.createUser(
                registerDTO.login,
                hashSync(
                    registerDTO.password,
                    genSaltSync(10)
                )
            );
        } catch (err) {
            throw new HttpException('An error occured during user saving', 500);
        }
        // TODO establish session
        return OwnUserDataDTO.fromUser(user);
    }

    async login(loginDTO: LoginDTO): Promise<OwnUserDataDTO> {
        let user: IUser;
        try {
            user = await this.userDao.getUserByLogin(loginDTO.login);
        } catch (err) {
            throw new HttpException('An error occured during signin', 500);
        }
        if ( !user ) {
            throw new HttpException('invalid credentials', 401);
        }
        if ( !compare(loginDTO.password, user.password) ) {
            throw new HttpException('invalid credentials', 401);
        }
        // TODO establish session
        return OwnUserDataDTO.fromUser(user);
    }

}