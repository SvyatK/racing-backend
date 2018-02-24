import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';

@Component()
export class UserDao {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<IUser>) {
    }

    async createUser(login: string, password: string): Promise<IUser> {
        return this.userModel.create({
            login,
            password
        });
    }

    async getUserByLogin(login: string): Promise<IUser> {
        return this.userModel.findOne({
            login
        });
    }

}