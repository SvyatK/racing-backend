import { Document } from 'mongoose';

export interface IUser extends Document {

    login: string;
    password: string;
    firstName: string;
    lastName: string;
    displayName: string;
    countryCode: string;
    avatar: string;

}