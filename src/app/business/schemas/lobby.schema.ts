import * as mongoose from 'mongoose';
import { GameState } from '../interfaces/enum/game-state.enum';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const LobbySchema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    name: {
        type: String,
        required: true
    },
    serverUrl: {
        type: String
    },
    state: {
        type: Number,
        default: GameState.Initializing,
        required: true
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
});

LobbySchema.pre('save', function (next) {
    if ( this.isNew ) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    next();
});