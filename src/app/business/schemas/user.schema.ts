import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    login: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    if ( this.isNew ) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    next();
});