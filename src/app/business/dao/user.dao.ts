import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';

@Component()
export class UserDao {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<IUser>) {
    }

    async createUser(login: string, password: string, firstName: string, lastName: string, countryCode: string): Promise<IUser> {
        return this.userModel.create({
            login,
            password,
            firstName,
            lastName,
            countryCode
        });
    }

    async getUserById(id: string): Promise<IUser> {
        return this.userModel.findById(id);
    }

    async getUserByLogin(login: string): Promise<IUser> {
        return this.userModel.findOne({
            login
        });
    }

}