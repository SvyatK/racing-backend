import { Document, Types } from 'mongoose';
import { GameState } from './enum/game-state.enum';
import { IUser } from './user.interface';
import ObjectId = Types.ObjectId

export interface ILobby extends Document {

    name: string;
    serverUrl: string;
    state: GameState;
    owner: IUser | ObjectId;

}