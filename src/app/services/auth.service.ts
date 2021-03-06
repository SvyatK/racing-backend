import {Request as ExpressRequest} from 'express';
import {HttpException, Injectable} from '@nestjs/common';
import {RegisterDTO} from '../dto/requests/register.dto';
import {OwnUserDataDTO} from '../dto/responses/own-user-data.dto';
import {UserDao} from '../database/dao/user.dao';
import {compare, genSaltSync, hashSync} from 'bcrypt';
import {LoginDTO} from '../dto/requests/login.dto';
import UserEntity from '../database/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userDao: UserDao) {
    }

    async register(req: ExpressRequest, registerDTO: RegisterDTO): Promise<OwnUserDataDTO> {
        let user: UserEntity;
        try {
            user = await this.userDao.createUser(
                registerDTO.login,
                hashSync(
                    registerDTO.password,
                    genSaltSync(10)
                ),
                registerDTO.login,
                registerDTO.login,
                'us'
            );
        } catch (err) {
            throw new HttpException('An error occured during user saving', 500);
        }
        const ownUserData: OwnUserDataDTO = OwnUserDataDTO.fromUser(user);
        this.setSessionUser(req, ownUserData);
        return ownUserData;
    }

    async login(req: ExpressRequest, loginDTO: LoginDTO): Promise<OwnUserDataDTO> {
        let user: UserEntity;
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
        const ownUserData: OwnUserDataDTO = OwnUserDataDTO.fromUser(user);
        this.setSessionUser(req, ownUserData);
        return ownUserData;
    }

    private setSessionUser(req: ExpressRequest, ownUserData: OwnUserDataDTO): void {
        req.session.key = ownUserData.id;
        req.session.user = ownUserData;
    }

}