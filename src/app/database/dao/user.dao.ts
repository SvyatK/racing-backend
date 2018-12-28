import {Injectable} from '@nestjs/common';
import UserEntity from '../entities/user.entity';

@Injectable()
export class UserDao {

    constructor() {
    }

    async createUser(login: string, password: string, firstName: string, lastName: string, countryCode: string): Promise<UserEntity> {
        return UserEntity.create({
            login,
            password,
            firstName,
            lastName,
            countryCode
        });
    }

    async getUserById(id: string): Promise<UserEntity> {
        return UserEntity.findByPrimary(id);
    }

    async getUserByLogin(login: string): Promise<UserEntity> {
        return UserEntity.findOne({
            where: {
                login,
            }
        });
    }

}