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
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    countryCode: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
});

UserSchema.pre('save', function (next) {
    if ( this.isNew ) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    next();
});